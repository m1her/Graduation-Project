"use client";
import "app/globals.css";
import Card from "components/Card/index.tsx";
import Input from "components/Input/index.tsx";
import Button from "components/Button/index.tsx";
import { useRouter } from "next/navigation";

function EmailConf() {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/authentication/login");
  };

  return (
    <Card className="w-[430px] px-12 py-8">
      <form onSubmit={submitHandler}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-700">
            Confirmation code has been sent to you email!
          </h3>
        </div>
        <Input
          label="Confirmation code"
          id="codeConf"
          helperText="Enter your confirmation code"
          className="mb-5"
          labelClassName="block mb-2 text-sm font-semibold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
        />
        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
          fullWidth="true"
          type="submit"
        >
          Change password
        </Button>
      </form>
    </Card>
  );
}

export default EmailConf;
