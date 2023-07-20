"use client";
import "app/globals.css";
import { FORM_VALIDATION } from "data";
import { useAxios } from "Hooks";
import { useRouter } from "next/navigation";
import { HelperText, Card, Input, Button } from "components";
import { ErrorIconMini } from "lib";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useCounter from "featuers/authentecation/Hooks/useCounter";

function EmailConf() {
  const router = useRouter();
  const [showConf, setShowConf] = useState(false); //show confirmation message and components
  const { counter, setCounter, isDisabled, setIsDisabled } = useCounter(); //disable resend button for 15 sec

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
  });

  const { fetchData: sendCodeToEmail, loading: emailLoading } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/send-code-email",
      method: "POST",
    },
    options: {
      withAuthHeader: true,
      manual: true,
    },
    onSuccess: (data) => {
      console.log(data);
      setCounter(15);
      setShowConf(true);
      setIsDisabled(true);
    },
  }); // send verification code to users email

  const { fetchData: verifyCode, loading: verificationLoading } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/verify/email",
      method: "POST",
    },
    options: {
      withAuthHeader: true,
      manual: true,
    },
    onSuccess: () => {
      console.log("verified");
      router.push("/");
    },
    onError: () => {
      setError("confCodeReg", {
        type: "wrong code",
        message: "Invalid code",
      });
    },
  });//send entered code with access token to api to confirm the registered account

  const onSubmit = (data) => {
    if (verificationLoading) return;
    const sentData = {
      code: data.confCodeReg,
    };
    verifyCode(sentData);
  };//form submitting

  const sendVerificationCode = () => {
    if (emailLoading) return;
    setIsDisabled(true);
    sendCodeToEmail();
  };//resend code onClick function

  return (
    <Card className="w-[410px] px-12 py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h1 className="text-2xl mb-11 font-semibold text-gray-700">
            LeapStart
          </h1>
          {showConf && (
            <p className="text-xl font-semibold -mt-8 mb-4 text-green-600">
              Confirmation code has been sent to your email!
            </p>
          )}
        </div>
        <Input
          label="Confirmation Code*"
          id="confCode"
          placeholder="123456"
          withoutHelperText
          error={!!errors.confCodeReg}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="disabled:bg-gray-300 disabled:border-gray-400 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          disabled={!showConf}
          {...register("confCodeReg", {
            ...FORM_VALIDATION.confirmationCode,
            onChange: () => {
              clearErrors("confCodeReg");
            },
            onBlur: () => {
              clearErrors("confCodeReg");
            },
          })}
        />
        <HelperText
          showContent={!!errors.confCodeReg}
          className="text-red w-full text-xs min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h-5" />}
          text={errors.confCodeReg?.message}
        />

        {showConf && (
          <div className="-mt-2 text-right">
            <button
              className="disabled:text-gray-400 disabled:hover:text-gray-500 disabled:line-through text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-700 bg-transparent hover:bg-transparent focus:outline-none font-bold text-sm text-center"
              type="button"
              disabled={isDisabled}
              onClick={sendVerificationCode}
            >
              {emailLoading
                ? "Loading..."
                : counter == null
                ? "Resend code"
                : `${counter} Resend code`}
            </button>
          </div>
        )}

        {showConf && (
          <Button
            className="text-white dark:bg-indigo-500 w-full hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
            fullWidth="true"
            type="submit"
          >
            Confirm
          </Button>
        )}
        {/* switch between buttons <<showConf>> */}
        {!showConf && (
          <Button
            className="text-white  dark:bg-indigo-500 w-full hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
            fullWidth="true"
            onClick={sendVerificationCode}
          >
            {emailLoading ? "Loading..." : "Send code"}
          </Button>
        )}
      </form>
    </Card>
  );
}

export default EmailConf;
