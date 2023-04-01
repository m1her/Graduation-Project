"use client";
import { FORM_VALIDATION } from "data";
import "app/globals.css";
import Card from "components/Card/index.tsx";
import Link from "next/link";
import Input from "components/Input/index.tsx";
import Button from "components/Button/index.tsx";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
  });

  const onSubmit = async (data, e) => {
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
      setIsEmailError(true);
      setIsPasswordError(true);
      console.log(error);
    }
  };

  const onError = (errors, e) => {
    console.log(errors, e);
    if (errors.emailReg) {
      setIsEmailError(true);
    }
    if (errors.passwordReg) {
      setIsPasswordError(true);
    }
  };

  return (
    <Card className="w-[410px] px-12 py-8 rounded-sm">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
          helperText={errors.emailReg?.message}
          error={isEmailError}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="-mb-[4px] h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          {...register("emailReg", {
            ...FORM_VALIDATION.email,
            onChange: () => {
              clearErrors("emailReg");
              setIsEmailError(false);
            },
            onBlur: () => {
              setIsEmailError(false);
            },
          })}
        />
        <div className="h-[105px] pb-3">
          <Input
            label="Password*"
            id="password"
            type="password"
            placeholder="●●●●●●●●"
            helperText={errors.passwordReg?.message}
            labelClassName="block mb-2 text-sm font-bold text-gray-900 -mt-3"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
            error={isPasswordError}
            inputSize="small"
            {...register("passwordReg", {
              required: "Passsword is required",
              onChange: () => {
                clearErrors("passwordReg");
                setIsPasswordError(false);
              },
              onBlur: () => {
                setIsPasswordError(false);
              },
            })}
          />
          {error !== "" && (
            <p className="text-sm text-red-400 -mt-5">{error}</p>
          )}
        </div>

        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
          fullWidth
          buttonSize="small"
          type="submit"
        >
          Log In
          {/* {loading ? "Loading..." : "Log In"} */}
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
