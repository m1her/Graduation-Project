"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/emailConf");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold mt-10 mb-4 text-gray-700">
            Forgot Password
          </h1>
        </div>
        <div className="mb-6 mt-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Enter your email address"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white dark:bg-indigo-500 bg-indigo-500 h-9 w-full hover:bg-indigo-700 focus:outline-none font-bold rounded text-sm px-5 py-1 mt-2 mb-7 mr-2"
        >
          Continue
        </button>
      </form>
    </Card>
  );
}

export default Login;
