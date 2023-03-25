"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/auth/resetPassword");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-700">
            Confirmation code has been sent to you email!
          </h3>
        </div>
        <div className="mb-6 mt-7">
          <label
            htmlFor="code"
            className="block mb-2 text-sm font-semibold text-gray-900"
          >
            Please enter your confirmation code:
          </label>
          <input
            id="code"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block w-full p-2"
            placeholder="Enter confirmation code"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white dark:bg-indigo-500 bg-indigo-500 h-9 w-full hover:bg-indigo-700 focus:outline-none font-bold rounded text-sm px-5 py-1 mt-2 mb-7 mr-2"
        >
          Change password
        </button>
      </form>
    </Card>
  );
}

export default Login;