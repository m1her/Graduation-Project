"use client";
import {
  Card,
  Input,
  Button,
  PhoneInput,
  Select,
  MultipleSelectChip,
  ExpertDilog,
} from "components";
import { XMarkIconMini, CalendarIcon } from "lib";
import { getStorageItem } from "utils";
import useForm, { Controller } from "lib/react-hook-form";
import { useState } from "react";
import { FORM_VALIDATION, countriesList, specialityList } from "data";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Cookies from "js-cookie";
import { setStorageItem } from "utils";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const SendUpdatedDataPopupNormal = (props) => {
  const router = useRouter();
  const user = getStorageItem("User");
  const [normalDataLoading, setNormalDataLoading] = useState(false);
  const [error, setError] = useState(""); //manage error messages
  const [date, setDate] = useState(
    user.dob ? new Date(user.dob).toLocaleDateString() : ""
  );
  const [expertData, setExpertData] = useState({ catagories: [] });

  const {
    register,
    handleSubmit,
    watch,
    control,
    clearErrors,
    clearErrorOnChange,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
    defaultValues: {
      fullName: user.name,
      dateOfBirth: user.dob ? new Date(user.dob).toLocaleDateString() : "",
      country: user.country,
      phone: user.phone,
      //  speciality: user.Specialty,
    },
  }); //form hook

  const onSubmit = (data, e) => {
    e.preventDefault();
    setNormalDataLoading(true);
    console.log(watch("fullName"));
    console.log(data.phone);
    console.log(data.country);
    console.log(data.dateOfBirth);
    const noVerification = async () => {
      const formData = new FormData();
      formData.append("name", data.fullName);
      formData.append("phone", data.phone);
      formData.append("country", data.country);
      formData.append("dob", date || "");
      //formData.append("Specialty", data.speciality);
      const Token = JSON.parse(Cookies.get("currentUser"));

      try {
        const response = await fetch(
          "https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/profile/",
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${Token.accessToken}`,
            },
            body: formData,
          }
        );

        const data = await response.json();
        console.log(data);
        setStorageItem("User", data.data.user);
      } catch (error) {
        console.log(error);
      }
      setNormalDataLoading(false);
    };
    noVerification();
  };

  const onVerificationSubmit = handleSubmit((data, e) => {
    console.log("verify");
  });
  const onExpertSubmit = handleSubmit((data, e) => {
    console.log("verify");
    console.log(data.salary);
    console.log(expertData);
  });

  const closePopHandler = (e) => {
    e.stopPropagation();
    props.handlePops(false);
    document.body.style.overflow = "unset";
  };

  const closezasdPopHandler = (e) => {
    e.stopPropagation();
  };
  const onDateChange = (newDate) => {
    setDate(newDate.toLocaleDateString()); //save the selected date into data state
  };

  //reset password ///////////
  const resetPassHandler = () => {
    router.push("/authentication/forgotPassword");
  };

  return (
    <div
      className="fixed top-0 left-0 min-h-screen h-full w-full bg-[#000000b7] grid place-items-center"
      onClick={closePopHandler}
    >
      <Card
        className="w-[500px] h-[550px] relative p-0"
        onClick={closezasdPopHandler}
      >
        <div id="header" className="w-full -mt-2 pt-2 ">
          <p className="text-xl font-semibold ">Personal Information</p>
          <XMarkIconMini
            className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer"
            onClick={closePopHandler}
          />
          <hr className=" h-px -mx-4 mt-3 bg-gray-800 border-0 dark:bg-gray-300" />
        </div>

        <div className="h-[460px] overflow-y-auto overflow-x-hidden pt-2 px-5 -scroll-mr-4">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-xs float-right -mt-2 mb-4">
              No verification required.
            </div>
            <div className="grid gap-y-4 mt-8 mb-2 grid-cols-2 w-full">
              <div className="text-gray-800 flex items-center">Full Name:</div>
              <Input
                id="full-name"
                inputSize="small"
                inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                placeholder="Enter full name"
                withoutHelperText
                {...register("fullName", {
                  ...FORM_VALIDATION.name,
                  onChange: () => clearErrorOnChange("fullName"),
                })}
                error={!!errors.fullName}
              />
              {/*  */}
              <div className="text-gray-800 flex items-center">
                Phone Number:
              </div>
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
                    placeholder="Enter your phone number"
                    inputSize="small"
                    inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                    inputProps={{
                      ref,
                    }}
                    error={!!errors.phone}
                    withoutHelperText
                    onChange={(_, __, ___, value) => onChange(value)}
                    {...field}
                  />
                )}
              />
              {/*  */}

              <div className="text-gray-800 flex items-center">Country:</div>

              <Select
                options={countriesList}
                id="country-select"
                placeholder="Enter Country"
                selectSize="small"
                {...register("country", {
                  ...FORM_VALIDATION.country,
                  onChange: () => clearErrorOnChange("country"),
                })}
                error={!!errors.country}
                withoutHelperText
              />

              {/*  */}
              <div className="text-gray-800 flex items-center">
                Date Of Birth:
              </div>
              <Input
                id="date-of-birth"
                inputSize="small"
                inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                placeholder="Enter birth day"
                withoutHelperText
                value={date}
                {...register("dateOfBirth")}
                endIcon={
                  <Popover placement="top">
                    <PopoverHandler>
                      <Button className="flex content-center items-center hover:bg-transparent -mr-6">
                        <CalendarIcon className="text-gray-500 w-5 h-5" />
                      </Button>
                    </PopoverHandler>
                    <PopoverContent className="text-black -p-4 rounded w-[300px] h-fit z-10 mt-20">
                      <Calendar
                        onChange={onDateChange}
                        defaultValue={user.dob || ""}
                        value={date}
                        showNeighboringMonth={false}
                        locale={"en-US"}
                      />
                    </PopoverContent>
                  </Popover>
                }
              />
            </div>
            <div id="footer" className="w-full relative h-10">
              <Button
                className="text-white absolute right-2 top-0 mr-2 dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                fullWidth
                buttonSize="small"
                type="submit"
              >
                {normalDataLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-5 h-5 mx-1.5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
            <hr className="-mx-4 h-px my-2 bottom-0 bg-gray-800 border-0 dark:bg-gray-800" />
          </form>
        </div>
      </Card>
    </div>
  );
};

export default SendUpdatedDataPopupNormal;
