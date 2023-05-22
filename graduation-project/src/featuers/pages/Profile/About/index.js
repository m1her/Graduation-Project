"use client";
import { Card, Input, FileInput, Button } from "components";
import { useState } from "react";
import { getStorageItem } from "utils";
import { useForm } from "react-hook-form";
import {
  PencilIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
} from "lib";

const About = (props) => {
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
  }); //form hook

  const editHandler = () => {
    setEdit(true);
  };

  const saveHandler = () => {
    setEdit(false);
  };

  const handlePop = () => {
    props.handlePops(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Card className="ml-4 my-4 w-[254px] rounded-sm relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">About</p>
        <PencilIcon
          className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer"
          onClick={handlePop}
        />
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>
      <div className=" w-fit font-semibold right-0">
        <div className="flex items-center align-middle mb-2">
          <EnvelopeIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">{user.email}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <PhoneIcon className="fill-black w-5 h-5" />
          <p className="ml-2">{user.phone}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <CalendarIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">date of birth</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <MapPinIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">{user.country}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <TagIcon className=" fill-black w-5 h-5" />
          <p className="ml-2">Investment</p>
        </div>
      </div>
    </Card>
  );
};
export default About;

{
  /* <Card className="ml-10 my-4 w-[890px] rounded-sm relative">
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
    </Card> */
}
