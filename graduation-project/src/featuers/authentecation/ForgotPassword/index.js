"use client";
import "src/app/globals.css";
import Card from "src/components/Card/index.tsx";
import Input from "src/components/Input/index.tsx";
import Button from "src/components/Button/index.tsx";
import { useRouter } from "next/navigation";

function ForgotPassword() {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/auth/resetPassword");
  };


  return (
    <Card className="w-[430px] px-12 py-8">
      <form onSubmit={submitHandler}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold my-7 text-gray-700">
            Forgot Password
          </h1>
        </div>
        <Input
          label="Email address"
          id="email"
          type="Email"
          helperText="Enter your email"
          className="mb-5"
          labelClassName="block mb-2 text-sm font-semibold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
        />
        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
          fullWidth="true"
          type="submit"
        >
          Continue
        </Button>
      </form>
    </Card>
  );
}

export default ForgotPassword;
