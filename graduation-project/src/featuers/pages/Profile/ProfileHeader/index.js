"use client";
import { Card, Button, Image, Input } from "components";
import { useState } from "react";
import { PencilIcon } from "lib";
import { getStorageItem } from "utils";

const ProfileHeader = () => {
  const [edit, setEdit] = useState(false);
  const user = getStorageItem("User");

  //$25 USD / Hour
  //اشي عشان اول مرة يسجل فيها يروح للبروفايل و يكمله
  //date of birth
  //التخصص
  //verify email

  const editHandler = () => {
    setEdit(true);
  };

  const saveHandler = () => {
    setEdit(false);
  };

  return (
    <Card className="ml-10 relative w-[890px] rounded-sm">
      <div>
        <div className="w-6 h-6 p-1 flex content-center items-center absolute right-5 top-5 bg-[#ffffffd1] rounded-full">
          <PencilIcon className="w-6 h-6 text-blue font-bold" />
        </div>
        <Image
          src={user.photo}
          height={100}
          width={100}
          alt="Banner"
          className="bg-center bg-cover w-full h-60 rounded-t-sm"
        ></Image>
      </div>

      <div className="w-full">
        <div className="flex w-full">
          <Image
            src={user.photo}
            height={100}
            width={100}
            alt="profile"
            className="-mt-32 ml-7 rounded-md w-48 h-48 bg-cover"
          ></Image>
          <div className="w-full">
            <Button
              buttonSize="small"
              className="text-white h-8 flex float-right justify-center items-center m-2 dark:bg-indigo-700 bg-indigo-700 w-16 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
              onClick={!edit ? editHandler : saveHandler}
            >
              {!edit ? "Edit" : "Save"}
            </Button>
          </div>
        </div>

        <div className=" w-full relative px-6 mt-4">
          {!edit ? (
            <p className="text-3xl font-semibold mt-2">{user.name}</p>
          ) : (
            <Input
              inputSize="small"
              inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
              className="mb-2 w-64"
              placeholder=""
              withoutHelperText
            />
          )}
          <p className="text-gray-800 text-lg">Investment</p>
          <p className="text-gray-600 mt-2">$25 USD / Hour</p>
        </div>
      </div>

      <hr className=" my-4 -mx-4 right-0 h-px bg-gray-800 border-0 dark:bg-gray-300" />
      <div className="">
        <button className="text-lg text-gray-500">Posts</button>
        <button className="text-lg text-gray-500 ml-14">Resume</button>
        <button className="text-lg text-gray-500 ml-14">Schedule</button>
        <button className="text-lg text-gray-500 ml-14">Reviwes</button>
        <button className="text-lg font-semibold text-[#394cac] ml-14 under underline">
          About
        </button>
      </div>
    </Card>
  );
};

export default ProfileHeader;
