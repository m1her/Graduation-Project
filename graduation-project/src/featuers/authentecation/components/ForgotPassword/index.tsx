"use client";
import "app/globals.css";
import { useAxios } from "Hooks";
import { FORM_VALIDATION } from "data";
import { Card, Input, Button } from "components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getFieldHelperText } from "utils";
import { getCookie, setCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import {
  ForgotPasswordFormInputType,
  ForgotPasswordResponseType,
} from "featuers/authentecation/types";
import useCounter from "featuers/authentecation/Hooks/useCounter";

function ForgotPassword() {
  const router = useRouter();
  const [toggleUI, setToggleUI] = useState(false);//toggle components after and before sending confirmation code
  const { counter, setCounter, isDisabled, setIsDisabled } = useCounter();//disable resend button for 15 sec

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: { errors },
  } = useForm<ForgotPasswordFormInputType>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });//form hook

  const { fetchData: sendCodeToEmail, loading: emailLoading } = useAxios<
    ForgotPasswordResponseType,
    ForgotPasswordFormInputType
  >({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users/password/forgot",
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setCookie("resetPassword_id", data.data._id);
      setToggleUI(true);
      setCounter(15);
      setIsDisabled(true);
    },
    onError: () => {
      setError("emailReg", {
        type: "wrong email",
        message: "User not found",
      });
    },
  });//sends verification code to entered email

  const { fetchData: VerifyCode, loading: verifyLoading } = useAxios({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users/password/verify-code",
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setCookie("recoverToken", data.data.recoverToken);
      router.push("/authentication/resetPassword");

      console.log(data);
    },
    onError: () => {
      setError("codeReg", {
        type: "wrong code",
        message: "Invalid code",
      });
    },
  });//send verification code with the id cookie to api to check and confirm

  const onSubmit = (data) => {
    if (toggleUI) {
      VerifyCode({//send request to api
        code: data.codeReg,
        _id: getCookie(COOKIES_KEYS.resetPassword_id),
      });
    } else {
      sendCodeToEmail({//send request to users email
        email: data.emailReg,
        emailReg: "",
        codeReg: "",
      });
    }
  };//form submitting with conditions

  const submitVerificationCode = () => {
    setIsDisabled(true);
    sendCodeToEmail({
      email: watch("emailReg"),
      emailReg: "",
      codeReg: "",
    });//send request to users email
  };

  return (
    <Card className="w-[410px] px-12 py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold my-7 text-gray-700">
            Forgot Password
          </h1>
        </div>

        {!toggleUI && (
          <div>
            <Input
              label="Email*"
              id="email"
              placeholder="Example@example.com"
              error={!!errors.emailReg}
              labelClassName="block mb-2 text-sm font-bold text-gray-900"
              inputClassName="mb-1 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
              {...register("emailReg", {
                ...FORM_VALIDATION.email,
                onChange: () => {
                  clearErrors("emailReg");
                },
                onBlur: () => {
                  clearErrors("emailReg");
                },
              })}
              helperText={getFieldHelperText("error", errors.emailReg?.message)}
            />

            <Button
              className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
              fullWidth={true}
              type="submit"
            >
              {emailLoading ? "Loading..." : "Continue"}
            </Button>
          </div>
        )}
        {/* first step ui */}
        {/* ////////////////////////////////////////////////////////////////////////////// */}
        {/* second step ui */}
        {toggleUI && (
          <Input
            label="Confirmation code*"
            id="confCode"
            placeholder="123456"
            error={!!errors.codeReg}
            labelClassName="block mb-2 text-sm font-bold text-gray-900"
            inputClassName="mb-1 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
            {...register("codeReg", {
              ...FORM_VALIDATION.confirmationCode,
              onChange: () => {
                clearErrors("codeReg");
                //setIsEmailError(false);
              },
              onBlur: () => {
                clearErrors("codeReg");
                //  setIsEmailError(false);
              },
            })}
            helperText={getFieldHelperText("error", errors.codeReg?.message)}
          />
        )}

        {toggleUI && (
          <div className="-mt-4 text-right">
            <button
              className="disabled:text-gray-400 disabled:hover:text-gray-500 disabled:line-through text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-700 bg-transparent hover:bg-transparent focus:outline-none font-bold text-sm text-center"
              type="button"
              disabled={isDisabled}
              onClick={submitVerificationCode}
            >
          
            {emailLoading
                ? "Loading..."
                : counter == null
                ? "Resend code"
                : `${counter} Resend code`}
            </button>
          </div>
        )}
        {toggleUI && (
          <Button
            className="text-white  dark:bg-indigo-500 w-full hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
            fullWidth={true}
            type="submit"
          >
            {verifyLoading ? "Loading..." : "Confirm code"}
          </Button>
        )}
      </form>
    </Card>
  );
}

export default ForgotPassword;
