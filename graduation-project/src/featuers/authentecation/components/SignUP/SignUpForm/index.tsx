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
import { useRouter } from "next/navigation";
import { getFieldHelperText, getFullName } from "utils";

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
    onSuccess: () => {
      router.push("/");
      console.log("sucess");
    },
  });
  const onSubmit = handleSubmit((data) => {
    if (loading) return;
    const signUpData = {
      name: getFullName(data.firstName, data.lastName),
      phone: data.mobile,
      country: data.country,
      password: data.password,
      email: data.email,
    };
    signUp(signUpData);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="first-name-input"
          label="First Name"
          placeholder="Enter first name"
          className="flex-1 basis-full"
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
          label="Last Name"
          placeholder="Enter last name"
          className="flex-1 basis-full"
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
        className="text-red w-full text-xs justify-center min-h-[20px]"
        startIcon={<ErrorIconMini className="w-5 h5" />}
        text={errors.firstName?.message || errors.lastName?.message}
      />
      <Input
        id="email-input"
        label="Email"
        placeholder="Enter Email"
        inputSize="small"
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
        label="Password"
        placeholder="Enter Password"
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
        name="mobile"
        rules={{
          ...FORM_VALIDATION.mobile,
          onChange: () => clearErrorOnChange("mobile"),
        }}
        render={({ field: { ref, onChange, ...field } }) => (
          <PhoneInput
            id="phone-input"
            label="Phone Number"
            placeholder="Enter your phone number"
            inputSize="small"
            inputProps={{
              ref,
            }}
            error={!!errors.mobile}
            helperText={getFieldHelperText("error", errors.mobile?.message)}
            onChange={(_, __, ___, value) => onChange(value)}
            {...field}
          />
        )}
      />
      <Select
        options={countriesList}
        id="country-select"
        label="Country"
        placeholder="Enter Country"
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
      <Button type="submit" buttonSize="small" fullWidth>
        {loading ? "Loading..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
