"use client";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const fetchDataHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-http-fa04a-default-rtdb.firebaseio.com/users/user1.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setEmail(data.email);
      setPassword(data.password);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchDataHandler(); //empty data when fetched at the beggining ?? 
  }, []);


  const onSubmit = async (data, e) => {
    e.preventDefault();
    fetchDataHandler();

    if (email == data.email && password == data.password) {
      console.log(email + "\n" + password);
    } else console.log("error");
  };

  const onError = () => {
    console.log("error");
  };

  //       console.log(data);
  //       // localStorage.setItem("Token", res.data.accessToken);
  //       // if (res.statusCode >= 400) setError("user not found");
  //       // else if (res.statusCode < 400) {
  //       //   console.log("LOGGEDIN");

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold mt-5 mb-4 text-gray-700">
            Log in to your account
          </h1>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Email address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white dark:bg-indigo-500 bg-indigo-500 h-8 w-full hover:bg-indigo-700 focus:outline-none font-bold rounded text-sm px-5 py-1 mt-2 mr-2 mb-1"
        >
          Log in
        </button>

        <Link
          className="text-[#2D65E4] font-semibold text-sm self-end object-right ml-52"
          href="/forgotPassword"
        >
          Forgot password?
        </Link>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-80 h-px my-4 bg-gray-200 border-0 dark:bg-gray-400" />
          <span className="absolute px-1 text-xs font-bold text-gray-400 -translate-x-1/2 bg-white left-1/2 bg-white">
            OR
          </span>
        </div>

        <button
          type="button"
          className="text-white dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded text-sm w-full px-20 py-2.5 text-center content-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
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
        </button>
        <div className="text-center">
          <hr className="h-px mt-2 mb-3 -mx-14 bg-gray-200 border-0 dark:bg-gray-300" />

          <Link
            className="text-[#2D65E4] font-bold text-center text-sm mt-10"
            href="/"
          >
            Don&#39;t have an account? Sign up
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default Login;
