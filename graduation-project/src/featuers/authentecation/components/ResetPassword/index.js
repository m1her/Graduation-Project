"use client";
import "app/globals.css";
import { FORM_VALIDATION, VALIDATION_RULES } from "data";
import { getFieldHelperText } from "utils";
import Card from "components/Card";
import Input from "components/Input";
import Button from "components/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAxios } from "Hooks";
import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";

function ResetPassword() {
  const router = useRouter();

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

  const {
    fetchData: resetPassword,
    data,
    error,
    loading,
  } = useAxios({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users/password/reset",
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: () => {
      router.push("/authentication/login");
      console.log("sucess");
    },
    onError: () => {
      setError("codeReg", {
        type: "wrong code",
        message: "Invalid code",
      });
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    if(data.newPasswordReg === data.confirmPasswordReg){
      resetPassword({
        password: data.newPasswordReg,
        recoverToken: getCookie(COOKIES_KEYS.recoverToken),

      })
      console.log("yes it does");
    }
    else{
      setError('confirmPasswordReg', { 
        type: 'noo matching passwords',
        message: "Passwords doesn't match"
      });
      return;
    }
  };

  const onError = (errors, e) => {
    console.log(errors, e);
    //  if (errors.emailReg) {
    //   setIsCodeInpuError(true);
    //  }
  };

  return (
    <Card className="w-[410px] px-12 py-8">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700">LeapStart</h1>
          <h1 className="text-2xl font-semibold mt-5 mb-4 text-gray-700">
            Reset Password
          </h1>
        </div>

        <Input
          label="New password*"
          id="newPassword"
          placeholder="Enter your new password"
          error={!!errors.newPasswordReg}
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="mb-1 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          {...register("newPasswordReg", {
            ...FORM_VALIDATION.password,
            onChange: () => {
              clearErrors("newPasswordReg");
            },
            onBlur: () => {
              clearErrors("newPasswordReg");
            },
          })}
          helperText={getFieldHelperText(
            "error",
            errors.newPasswordReg?.message
          )}
        />

        <Input
          label="Confirm password*"
          id="confirmPassword"
          placeholder="Confirm your new password"
          error={!!errors.confirmPasswordReg}
          className="-mt-2"
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="mb-1 h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          {...register("confirmPasswordReg", {
            required: "Confirming your password in required",
            pattern: {
              value: VALIDATION_RULES.password,
              message: "Invalid password ",
            },

            onChange: () => {
              clearErrors("confirmPasswordReg");
            },
            onBlur: () => {
              clearErrors("confirmPasswordReg");
            },
          })}
          helperText={getFieldHelperText(
            "error",
            errors.confirmPasswordReg?.message
          )}
        />
        <Button
          className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 py-1 text-sm text-center"
          type="submit"
        >
         {loading ? "Loading..." : "Update password"} 
        </Button>
      </form>
    </Card>
  );
}

export default ResetPassword;
