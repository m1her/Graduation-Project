"use client";

import "app/globals.css";
import { useAxios } from "Hooks";
import { FORM_VALIDATION } from "data";
import Card from "components/Card";
import Input from "components/Input";
import Button from "components/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { HelperText } from "components";
import { ErrorIconMini } from "lib";

function ForgotPassword() {
  const router = useRouter();
  const [errorss, setErrorss] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
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
  
  const {
    fetchData: sendCode,
    data,
    error,
    loading,
  } = useAxios({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users",
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: () => {
      router.push("/authentication/emailConf");
      console.log(data);
      console.log("sucess");
    },
  });
  const onSubmit = (data) => {
   
    sendCode()
  };

  const onError = (errors, e) => {
    console.log(errors, e);
    if (errors.emailReg) {
      setIsEmailError(true);
    }
  };
  return (
    <Card className="w-[410px] px-12 py-8">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold my-7 text-gray-700">
            Forgot Password
          </h1>
        </div>
        <Input
          label="Email*"
          id="email"
          type="email"
          placeholder="Example@example.com"
          withoutHelperText
          error={isEmailError}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
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
        <HelperText
          showContent={!!errors.emailReg}
          className="text-red w-full text-xs min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h-5" />}
          text={errors.emailReg?.message}
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
