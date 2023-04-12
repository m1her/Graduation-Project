"use client";
import "app/globals.css";
import { FORM_VALIDATION } from "data";
import { Card, Input, Button, HelperText } from "components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorIconMini } from "lib";

function Login() {
  const router = useRouter();
  const [error, setError] = useState("");//manage error messages

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
  });//form hook

  const onSubmit = async () => {
    try {
      const response = await fetch(
        "https://leapstart.onrender.com/api/v1/users/login",
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
      localStorage.setItem("Token", data.data.accessToken);
      if (data.statusCode >= 400) setError("user not found");
      else if (data.statusCode < 400) {
        console.log("LOGGEDIN");
      }
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };//form on submit function it sends a request with entered user data to the api 

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
          className="text-red w-full text-xs min-h-[20px]"
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
            className="text-red w-full text-xs min-h-[20px]"
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
          Log In
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
