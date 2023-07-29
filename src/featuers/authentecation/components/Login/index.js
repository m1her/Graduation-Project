"use client";
import "app/globals.css";
import { FORM_VALIDATION } from "data";
import { Card, Input, Button, HelperText } from "components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorIconMini } from "lib";
import { setStorageItem } from "utils";
import { setCookie } from "lib/js-cookie";
import Cookies from "js-cookie";
function Login() {
  const router = useRouter();
  const [error, setError] = useState(""); //manage error messages
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
  }); //form hook

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: watch("emailReg"),
            password: watch("passwordReg"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Wrong email or password.");
      }

      const data = await response.json();

    

      Cookies.set("currentUser", JSON.stringify(data.data));
      localStorage.setItem("Token", data.data.accessToken);
      console.log(data.data.user);
      setStorageItem("User", data.data.user);

      if (data.statusCode >= 400) setError("user not found");
      else if (data.statusCode < 400) {
        console.log("LOGGEDIN");
      }

      router.push("/web/Home");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }; //form on submit function it sends a request with entered user data to the api

  return (
    <Card className="w-[410px] px-12 py-8 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mt-4">
            LeapStart
          </h1>

          <h1 className="text-2xl font-semibold mt-8 mb-5 text-gray-700">
            Log in to your account
          </h1>
        </div>

        <Input
          label="Email*"
          id="email"
          type="text"
          placeholder="Example@example.com"
          error={!!errors.emailReg}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName=" h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          withoutHelperText
          {...register("emailReg", {
            ...FORM_VALIDATION.email,
            onChange: () => {
              clearErrors("emailReg");

              setError("");
            },
            onBlur: () => {
              clearErrors("emailReg");
              setError("");
            },
          })}
        />

        <HelperText
          showContent={!!errors.emailReg}
          className="text-red w-full text-xs min-h-[20px] "
          startIcon={<ErrorIconMini className="w-5 h-5" />}
          text={errors.emailReg?.message}
        />
        <div className="h-[105px] pb-3">
          <Input
            label="Password*"
            id="password"
            type="password"
            placeholder="●●●●●●●●"
            withoutHelperText
            labelClassName="block mb-2 text-sm font-bold text-gray-900 -mt-2"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
            error={!!errors.passwordReg}
            inputSize="small"
            {...register("passwordReg", {
              required: "Passsword is required",
              onChange: () => {
                clearErrors("passwordReg");
              },
              onBlur: () => {
                clearErrors("passwordReg");
              },
            })}
          />
          <HelperText
            showContent={!!errors.passwordReg}
            className="text-red w-full text-xs min-h-[20px] -mt-4"
            startIcon={<ErrorIconMini className="w-5 h-5" />}
            text={errors.passwordReg?.message}
          />
          {error !== "" && (
            <div className="-mt-5 text-red-400">
              <ErrorIconMini className="w-5 h-5" />
              <p className="ml-6 text-sm -mt-5">{error}</p>
            </div>
          )}
        </div>

        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
          fullWidth
          buttonSize="small"
          type="submit"
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-4 h-4 -mt-1 text-white animate-spin dark:text-gray-600 fill-gray-600 dark:fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Log In"
          )}
        </Button>

        <Link
          className="text-[#2D65E4] font-bold text-sm self-end object-right ml-[184px]"
          href="/authentication/forgotPassword"
        >
          Forgot password?
        </Link>

        <div className="inline-flex items-center justify-center w-full mb-2">
          <hr className="w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-400" />
          <span className="absolute px-1 text-xs font-bold text-gray-400 -translate-x-1/2 bg-white left-1/2">
            OR
          </span>
        </div>
        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm w-full px-20 py-2.5 text-center content-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          fullWidth="true"
          type="button"
          buttonSize="small"
        >
          <svg
            className="w-4 h-4 mr-2 -ml-1"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </Button>

        <div className="text-center">
          <hr className="h-px mt-4 mb-3 -mx-12 bg-gray-200 border-0 dark:bg-gray-300" />

          <Link
            className="text-[#2D65E4] font-bold text-center text-sm mt-10"
            href="/authentication/sign-up"
          >
            Don&#39;t have an account? Sign up
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default Login;
