"use client";
import { Card, Input, FileInput, Button } from "components";
import { useState } from "react";
import { getStorageItem } from "utils";
import { useForm } from "react-hook-form";

const About = () => {
  const [edit, setEdit] = useState(false);
  const user = getStorageItem("User");

  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange" | "onBlur",
  });//form hook



  const editHandler = () => {
    setEdit(true);
  };

  const saveHandler = () => {
    setEdit(false);
  };
  return (
    <Card className="ml-10 my-4 w-[890px] rounded-sm relative">
      <p className="text-xl font-semibold">Personal Information</p>
      <Button
        buttonSize="small"
        className="text-white h-8 flex justify-center items-center float-right absolute top-2 right-2 dark:bg-indigo-700 bg-indigo-700 w-16 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
        onClick={!edit ? editHandler : saveHandler}
      >
        {!edit ? "Edit" : "Save"}
      </Button>
      <hr className=" h-px -mx-4 mt-4 bg-gray-800 border-0 dark:bg-gray-300" />
      <div className="grid gap-x-8 gap-y-2 my-8 ml-4 grid-cols-2 w-fit">
        {user.isExpert && (
          <div className="text-gray-800 flex items-center">Salary</div>
        )}
        {user.isExpert ? (
          !edit ? (
            <p className="">{user.email}</p>
          ) : (
            <Input
              inputSize="small"
              inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
              className="-mb-10"
              placeholder=""
              withoutHelperText
            />
          )
        ) : (
          <></>
        )}

        <div className="text-gray-800 flex items-center">Email</div>
        {!edit ? (
          <p className="">{user.email}</p>
        ) : (
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
            placeholder=""
            withoutHelperText
          />
        )}
        <div className="text-gray-800 flex items-center">Phone Number</div>
        {!edit ? (
          <p className="">{user.phone}</p>
        ) : (
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
            withoutHelperText
          />
        )}
        <div className="text-gray-800 flex items-center">Date Of Birth</div>
        {!edit ? (
          <p className="">date of birth</p>
        ) : (
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
            withoutHelperText
          />
        )}
        <div className="text-gray-800 flex items-center">Country</div>
        {!edit ? (
          <p className="">{user.country}</p>
        ) : (
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
            withoutHelperText
          />
        )}
        <div className="text-gray-800 flex items-center">specialty</div>
        {!edit ? (
          <p className="">{user.email}</p>
        ) : (
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
            withoutHelperText
          />
        )}
      </div>
    </Card>
  );
};
export default About;
