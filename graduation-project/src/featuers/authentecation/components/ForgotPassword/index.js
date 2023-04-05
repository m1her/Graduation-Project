"use client";

import "app/globals.css";
import { useAxios } from "Hooks";
import { FORM_VALIDATION } from "data";
import { Card, Input, Button, HelperText } from "components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getFieldHelperText } from "utils";
import { getCookie, setCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";

function ForgotPassword() {
  const router = useRouter();
  const [email, setemail] = useState();
  const [toggleUI, setToggleUI] = useState(false);
  const [counter, setCounter] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      setIsDisabled(false);
      setCounter(null);
    }
  }, [counter]);

  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    watch,
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
  });

  const {
    fetchData: VerifyCode,
    data: verifyData,
    error: verifyError,
    loading: verifyLoading,
  } = useAxios({
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

      console.log("sucess");
    },
    onError: () => {
      setError("codeReg", {
        type: "wrong code",
        message: "Invalid code",
      });
    },
  });

  const onSubmit = (data) => {
    if (toggleUI == true) {
      VerifyCode({
        code: data.codeReg,
        _id: getCookie(COOKIES_KEYS.resetPassword_id),
      });
    } else {
      sendCodeToEmail({ email: data.emailReg });
    }
  };

  const onError = (errors, e) => {
    //  if (errors.emailReg) {
    //   setIsCodeInpuError(true);
    //  }
  };

  const submitVerificationCode = () => {
    setIsDisabled(true);
    sendCodeToEmail({email: watch("emailReg")});
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
              fullWidth="true"
              type="submit"
            >
              {emailLoading ? "Loading..." : "Continue"}
            </Button>
          </div>
        )}
        {/* ///////////////////////////////////////////////////////////////////////////////// */}
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
                //     setIsEmailError(false);
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
              {counter} Resend code
            </button>
          </div>
        )}
        {toggleUI && (
          <Button
            className="text-white  dark:bg-indigo-500 w-full hover:bg-indigo-700 dark:hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
            fullWidth="true"
            type="submit"
          >
            {verifyLoading ? "Loading..." : "Send code"}
          </Button>
        )}
      </form>
    </Card>
  );
}

export default ForgotPassword;
