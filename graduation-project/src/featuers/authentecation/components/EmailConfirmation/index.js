"use client";
import "app/globals.css";
import { FORM_VALIDATION } from "data";
import { useAxios } from "Hooks";
import { useRouter } from "next/navigation";
import { HelperText, Card, Input, Button } from "components";
import { ErrorIconMini } from "lib";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function EmailConf() {
  const router = useRouter();
  const [showConf, setShowConf] = useState(false);
  const [isInputError, setIsInpuError] = useState(false);
  const [counter, setCounter] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if(counter == 0){
      setIsDisabled(false);
      setCounter(null);
    }
  }, [counter]);

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
    fetchData: sendCodeToEmail,
    data: emailData,
    error: emailError,
    loading: emailLoading,
  } = useAxios({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users/send-code-email",
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
  });

  const {
    fetchData: verifyCode,
    data: verificationData,
    error: verificationError,
    loading: verificationLoading,
  } = useAxios({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users/verify/email",
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
  });

  const onSubmit = (data) => {
    if (verificationLoading) return;
    const sentData = {
      code: data.confCodeReg,
    };
    verifyCode(sentData);
  };

  const onError = (errors) => {
    if (errors.confCodeReg) {
      setIsInpuError(true);
    }
  };

  const sendVerificationCode = () => {
    if (emailLoading) return;
    sendCodeToEmail();
  };

  return (
    <Card className="w-[410px] px-12 py-8">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
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
          error={isInputError}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="disabled:bg-gray-300 disabled:border-gray-400 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          disabled={!showConf}
          {...register("confCodeReg", {
            ...FORM_VALIDATION.confirmationCode,
            onChange: () => {
              clearErrors("confCodeReg");
              setIsInpuError(false);
            },
            onBlur: () => {
              setIsInpuError(false);
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
              {counter}  Resend code
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
