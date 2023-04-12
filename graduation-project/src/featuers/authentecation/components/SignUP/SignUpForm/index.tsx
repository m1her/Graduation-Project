"use client";
import { Button, HelperText, Input, PhoneInput, Select } from "components";
import { countriesList, FORM_VALIDATION } from "data";
import {
  SignUpFormInputsType,
  SignUpResponseType,
} from "featuers/authentecation/types";
import { useAxios } from "Hooks";
import { ErrorIconMini } from "lib";
import useForm, { Controller } from "lib/react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getFieldHelperText, getFullName } from "utils";
import { setCookie } from "lib/js-cookie";

export const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    clearErrorOnChange,
  } = useForm<SignUpFormInputsType>();
  const {
    fetchData: signUp,
    error,
    loading,
  } = useAxios<SignUpResponseType, SignUpFormInputsType>({
    config: {
      url: "https://leapstart.onrender.com/api/v1/users",
      method: "POST",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setCookie("currentUser", data.data);
      router.push("/authentication/emailConf");
      console.log("sucess");
    },
  });
  const onSubmit = handleSubmit((data, e) => {
    e.preventDefault();
    if (loading) return;
    const signUpData = {
      name: getFullName(data.firstName, data.lastName),
      phone: data.phone,
      country: data.country,
      password: data.password,
      email: data.email,
    };
    signUp(signUpData);
  });

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-center text-2xl font-semibold mt-6 mb-7 text-gray-700">
        Sign up for your account
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="first-name-input"
          label="First Name*"
          placeholder="Enter first name"
          className="flex-1 basis-full"
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          inputSize="small"
          {...register("firstName", {
            ...FORM_VALIDATION.fullName,
            onChange: () => clearErrorOnChange("firstName"),
          })}
          error={!!errors.firstName}
          withoutHelperText
        />
        <Input
          id="last-name-input"
          label="Last Name*"
          placeholder="Enter last name"
          className="flex-1 basis-full"
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          inputSize="small"
          {...register("lastName", {
            ...FORM_VALIDATION.fullName,
            onChange: () => clearErrorOnChange("lastName"),
          })}
          error={!!errors.lastName}
          withoutHelperText
        />
      </div>
      <HelperText
        showContent={!!errors.firstName || !!errors.lastName}
        className="text-red w-full text-xs min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={errors.firstName?.message || errors.lastName?.message}
      />
      <Input
        id="email-input"
        label="Email*"
        placeholder="Example@example.com"
        inputSize="small"
        className="-mt-1"
        inputClassName="h-9 mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
        labelClassName="block mb-2 text-sm font-bold text-gray-900 "
        {...register("email", {
          ...FORM_VALIDATION.email,
          onChange: () => clearErrorOnChange("email"),
        })}
        error={!!errors.email}
        helperText={getFieldHelperText("error", errors.email?.message)}
      />
      <Input
        id="password-input"
        type="password"
        label="Password*"
        placeholder="Enter Password"
        inputClassName="h-9 mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
        labelClassName="block mb-2 text-sm font-bold text-gray-900 -mt-1"
        className="-mt-3"
        inputSize="small"
        {...register("password", {
          ...FORM_VALIDATION.password,
          onChange: () => clearErrorOnChange("password"),
        })}
        error={!!errors.password}
        helperText={getFieldHelperText("error", errors.password?.message)}
      />
      <Controller
        control={control}
        name="phone"
        rules={{
          ...FORM_VALIDATION.mobile,
          onChange: () => clearErrorOnChange("phone"),
        }}
        render={({ field: { ref, onChange, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number*"
            placeholder="Enter your phone number"
            inputSize="small"
            className="-mt-3"
            inputProps={{
              ref,
            }}
            error={!!errors.phone}
            helperText={getFieldHelperText("error", errors.phone?.message)}
            onChange={(_, __, ___, value) => onChange(value)}
            {...field}
          />
        )}
      />
      <div className="mb-1 h-24">
        <Select
          options={countriesList}
          id="country-select"
          label="Country*"
          placeholder="Enter Country"
          className="-mt-2"
          selectSize="small"
          {...register("country", {
            ...FORM_VALIDATION.country,
            onChange: () => clearErrorOnChange("country"),
          })}
          error={!!errors.country}
          helperText={getFieldHelperText("error", errors.country?.message)}
        />
        <HelperText
          showContent={!!error}
          className="text-red w-full text-xs justify-center min-h-[20px]"
          startIcon={<ErrorIconMini className="w-5 h5" />}
          text={error?.message}
        />
      </div>
      <Button
        className="text-white dark:bg-indigo-500 bg-indigo-500 w-full hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
        fullWidth
        buttonSize="small"
        type="submit"
      >
        {loading ? "Loading..." : "Sign Up"}
      </Button>

      <div className="text-center">
        <hr className="h-px mt-4 mb-3 -mx-12 bg-gray-200 border-0 dark:bg-gray-300" />

        <Link
          className="text-[#2D65E4] font-bold text-center text-sm mt-10"
          href="/authentication/login"
        >
          Already have an account? Log in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
