"use client";
import { Card, Button, Image, Input } from "components";
import { useState } from "react";
import { PencilIcon, CheckIconMini } from "lib";
import { getStorageItem } from "utils";

const ProfileHeader = (props) => {
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState("posts");
  const user = getStorageItem("User");
  const [userName, setUserName] = useState({
    name: user.name,
    about: "Here you write your about",
  });

  const nameHandler = (e) => {
    setUserName({
      name: e.target.value,
      about: userName.about
    });
  };
  const aboutHandler = (e) => {
    setUserName({
      name: userName.name,
      about: e.target.value,
    });
  };

  const editHandler = () => {
    setEdit(true);
  };

  const saveHandler = () => {
    setEdit(false);
    console.log(userName);
  };

  const handleClickDrawer = (e) => {
    const value = e.target.getAttribute("data-value");
    props.handleProfileSection(value);
    switch (value) {
      case "posts": {
        setActive("posts");
        break;
      }
      case "resume": {
        setActive("resume");
        break;
      }
      case "schedule": {
        setActive("schedule");
        break;
      }
      case "reviwes": {
        setActive("reviwes");
        break;
      }
      default:
        break;
    }
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

      <div className="w-full mb-4">
        <div className="flex w-full h-36 mb-8 relative">
          <Image
            src={user.photo}
            height={100}
            width={100}
            alt="profile"
            className="-mt-28 ml-7 rounded-md w-48 h-48 bg-cover"
          ></Image>

          <div className="w-full px-6 mt-4 relative">
            {!edit ? (
              <p className="text-3xl font-semibold ">{userName.name}</p>
            ) : (
              <Input
                inputSize="medium"
                inputClassName="h-9 font-semibold text.lg bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                className="mb-2 w-64"
                value={userName.name}
                withoutHelperText
                onChange={nameHandler}
              />
            )}
            {!edit ? (
              <p className="text-lg font-medium text-gray-700">
                {userName.about}
              </p>
            ) : (
              <Input
                inputSize="small"
                inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                className="mb-2 w-64"
                value={userName.about}
                withoutHelperText
                onChange={aboutHandler}
              />
            )}
            <div
              className="absolute top-0 right-0 rounded-full p-2 border border-gray-200 drop-shadow-lg text-black hover:bg-indigo-700 hover:border-indigo-800 hover:text-white cursor-pointer"
              onClick={!edit ? editHandler : saveHandler}
            >
              {!edit ? (
                <PencilIcon className=" w-5 h-5" />
              ) : (
                <CheckIconMini className=" w-5 h-5" />
              )}

              {/* <Button
                buttonSize="small"
                className="text-white h-8 flex float-right  justify-center items-center m-2 dark:bg-indigo-700 bg-indigo-700 w-16 hover:bg-indigo-700 focus:outline-none font-bold px-3 text-sm text-center"
                onClick={!edit ? editHandler : saveHandler}
              >
                {!edit ? "Edit" : "Save"}
              </Button> */}
            </div>
          </div>
          <div className="w-fit absolute bottom-0 text-center ml-14">
            <p className="text-gray-700 right-0 text-lg font-semibold">
              $25 USD / Hour
            </p>
            <p className="text-gray-800 text-lg font-medium">Investment</p>
          </div>
        </div>
      </div>

      <hr className=" my-4 -mx-4 right-0 h-px bg-gray-800 border-0 dark:bg-gray-300" />
      <div className="">
        <button
          className={`text-lg ml-14
          ${
            active === "posts"
              ? "font-semibold text-[#394cac] underline"
              : "text-gray-500"
          }
          `}
          data-value="posts"
          onClick={handleClickDrawer}
        >
          Posts
        </button>
        <button
          className={`text-lg ml-14
          ${
            active === "resume"
              ? "font-semibold text-[#394cac] underline"
              : "text-gray-500"
          }
          `}
          data-value="resume"
          onClick={handleClickDrawer}
        >
          Resume
        </button>
        <button
          className={`text-lg ml-14
          ${
            active === "reviwes"
              ? "font-semibold text-[#394cac] underline"
              : "text-gray-500"
          }
          `}
          data-value="reviwes"
          onClick={handleClickDrawer}
        >
          Reviwes
        </button>
        <button
          className={`text-lg ml-14
          ${
            active === "schedule"
              ? "font-semibold text-[#394cac] underline"
              : "text-gray-500"
          }
          `}
          data-value="schedule"
          onClick={handleClickDrawer}
        >
          Schedule
        </button>
      </div>
    </Card>
  );
};

export default ProfileHeader;
