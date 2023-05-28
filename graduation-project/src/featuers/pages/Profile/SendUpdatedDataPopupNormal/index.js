"use client";
import { Card, Input, Button, PhoneInput, Select } from "components";
import { XMarkIconMini, CalendarIcon } from "lib";
import { getStorageItem } from "utils";
import useForm, { Controller } from "lib/react-hook-form";
import { useState } from "react";
import { FORM_VALIDATION, countriesList, specialityList } from "data";
import { getFieldHelperText } from "utils";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const SendUpdatedDataPopupNormal = (props) => {
  const user = getStorageItem("User");
  const [error, setError] = useState(""); //manage error messages
  const [date, setDate] = useState("");

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
  }); //form hook

  const onSubmit = handleSubmit((data, e) => {
    console.log(data.fullName);
    console.log(data.phone);
    console.log(data.country);
    console.log(date);
    console.log(data.speciality);
  });

  const onVerificationSubmit = handleSubmit((data, e) => {
    console.log("verify");
  });
  const onExpertSubmit = handleSubmit((data, e) => {
    console.log("verify");
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
                {...register("fullName")}
              />
              {/*  */}
              <div className="text-gray-800 flex items-center">
                Phone Number:
              </div>
              <Controller
                control={control}
                name="phone"
                render={({ field: { ref, onChange, ...field } }) => (
                  <PhoneInput
                    id="phone-input"
                    placeholder="Enter your phone number"
                    inputSize="small"
                    inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                    inputProps={{
                      ref,
                    }}
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
                {...register("country")}
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
                    <PopoverContent className="text-black -p-4 rounded w-[250px] h-fit z-10">
                      <Calendar
                        onChange={onDateChange}
                        value={date}
                        showNeighboringMonth={false}
                        locale={"en-US"}
                      />
                    </PopoverContent>
                  </Popover>
                }
              />
              {/*  */}
              <div className="text-gray-800 flex items-center">Specialty:</div>

              <Select
                options={specialityList}
                id="specialty-select"
                placeholder="Enter Specialty"
                selectSize="small"
                {...register("speciality")}
                withoutHelperText
              />

              {/* GRiddddddd */}
            </div>
            <div id="footer" className="w-full relative h-10">
              <Button
                className="text-white absolute right-2 top-0 mr-2 dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                fullWidth
                buttonSize="small"
                type="submit"
              >
                Save
              </Button>
            </div>
            <hr className="-mx-4 h-px my-2 bottom-0 bg-gray-800 border-0 dark:bg-gray-800" />
          </form>
          {/* formmm 22222222 */}
          <form onSubmit={handleSubmit(onVerificationSubmit)}>
            <div className="text-xs float-right mb-4">
              Verification by email is required .
            </div>
            <div className="grid gap-y-4 mt-8 mb-2 grid-cols-2 w-full">
              <div className="text-gray-800 flex items-center">Email:</div>
              <Input
                id="email-input"
                placeholder="Example@example.com"
                inputSize="small"
                inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                {...register("email")}
                withoutHelperText
              />
              <div className="text-gray-800 flex items-center">Password:</div>
              <Input
                id="password-input"
                placeholder=""
                inputSize="small"
                inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                {...register("password")}
                withoutHelperText
              />
            </div>
            <div className="w-full relative h-10">
              <Button
                className="text-white absolute right-2 top-0 mr-2 dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                fullWidth
                buttonSize="small"
                type="submit"
              >
                Save
              </Button>
            </div>
            <hr className="-mx-4 h-px my-2 bottom-0 bg-gray-800 border-0 dark:bg-gray-800" />
          </form>
          {/* formmmm 33333 */}
          <div className="relative h-52">
          <Button
                className="z-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mr-2 dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                fullWidth
                buttonSize="small"
              >
                Apply To Become An Expert 
              </Button>
            <div className="absolute top-0 left-0 w-full blur grid place-items-center pointer-events-none">
           
              <form onSubmit={handleSubmit(onExpertSubmit)}>
                <div className="text-xs float-right mb-4">
                  Needs to be verified by an admin.
                </div>
                <div className="grid gap-y-4 mt-8 mb-2 grid-cols-2 w-full">
                  <div className="text-gray-800 flex items-center">
                    Specialty:
                  </div>
                  <Select
                    options={specialityList}
                    id="specialty-select"
                    placeholder="Enter Specialty"
                    selectSize="small"
                    {...register("speciality")}
                    withoutHelperText
                  />
                  <div className="text-gray-800 flex items-center">Salary:</div>
                  <Input
                    id="salary"
                    inputSize="small"
                    inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                    placeholder="Enter your per hour salary"
                    withoutHelperText
                    {...register("salary")}
                  />
                  <div className="text-gray-800 flex items-center">file:</div>
                  <div className="text-gray-800 flex items-center">file:</div>
                </div>
                <div className="w-full relative h-10">
                  <Button
                    className="text-white absolute right-2 top-0 mr-2 dark:bg-indigo-500 bg-indigo-500 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                    fullWidth
                    buttonSize="small"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
            
          </div>
        
        </div>
      </Card>
    </div>
  );
};

export default SendUpdatedDataPopupNormal;
