"use client";
import { Card, Image, Input, TextArea } from "components";
import { useState, useEffect } from "react";
import { PencilIcon, CheckIconMini, XMarkIcon, CameraIcon } from "lib";
import Cookies from "js-cookie";
import { setStorageItem } from "utils";
import CropImage from "./CropImage";

const ProfileHeader = ({ handleProfileSection, user, currentUserId }) => {
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(user.isExpert ? "posts" : "callender");
  const [userName, setUserName] = useState(user.name);
  const [userBio, setUserBio] = useState(user.bio);
  const [image, setImage] = useState();
  const [imageType, setImageType] = useState("");
  const [current, setCurrent] = useState({ name: user.name, bio: user.bio });

useEffect(() => {
  handleProfileSection(user.isExpert ? "posts" : "callender");
}, []);

  const onSubmit = async (formData) => {
    formData.append("name", userName);
    console.log(formData);
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

      if (!response.ok) {
        throw new Error("Wrong email or password.");
      }

      const data = await response.json();
      console.log(data);
      setStorageItem("User", data.data.user);
      setUserName(data.data.user.name);
      setUserBio(data.data.user.bio === "undefined" ? "" : data.data.user.bio);
      setImage();
    } catch (error) {
      console.log(error);
    }
  };

  const nameHandler = (e) => {
    setUserName(e.target.value);
  };
  const aboutHandler = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/\n/g, "");
    setUserBio(newValue);
  };

  const editHandler = () => {
    setEdit(true);
  };

  const cancelHandler = () => {
    setUserName(current.name);
    setUserBio(current.bio);
    setEdit(false);
  };

  const saveHandler = () => {
    if (userName === "") {
      console.log("empty");
    } else {
      const formData = new FormData();

      formData.append("bio", userBio);
      setEdit(false);
      onSubmit(formData);
      const newCurrent = { name: userName, bio: userBio };
      setCurrent(newCurrent);
    }
  };

  const handleBannerChange = (e) => {
    setImage(e.target.files[0]);
    setImageType("profileBanner");
  };

  const handlePfpChange = (e) => {
    setImage(e.target.files[0]);
    setImageType("profileImage");
  };

  const handleClickDrawer = (e) => {
    const value = e.target.getAttribute("data-value");
    handleProfileSection(value);
    switch (value) {
      case "posts": {
        setActive("posts");
        break;
      }
      case "resume": {
        setActive("resume");
        break;
      }
      case "callender": {
        setActive("callender");
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
    <Card className=" relative w-full rounded-sm">
      {image && (
        <CropImage Image={image} onConfirm={onSubmit} imageType={imageType} />
      )}

      <div>
        {currentUserId == user._id && (
          <div className="w-6 h-6 p-1 flex content-center items-center absolute right-8 top-5 bg-[#ffffffd1] rounded-full">
            <label
              htmlFor="file-input"
              className="flex items-center rounded-full px-2 py-2 bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200"
            >
              <PencilIcon className="w-6 h-6 text-blue font-bold" />
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleBannerChange}
              />
            </label>
          </div>
        )}

        <Image
          src={`https://drive.google.com/uc?id=${user.profileBanner}`}
          height={1000}
          width={1000}
          alt="Banner"
          className="w-full h-60 rounded-t-sm object-cover object-center"
        ></Image>
      </div>

      <div className="w-full mb-4">
        <div className="flex w-full h-36 mb-8 relative">
          <div className="relative inline-block w-[350px]">
            <Image
            src={`https://drive.google.com/uc?id=${user.profileImage}`}
              // src={user.photo}
             // src="/CattegoryPageImages/FinanceInspirational.jpeg"
              height={1000}
              width={1000}
              alt="profile"
              className="-mt-28 ml-7 rounded-md w-48 h-48 object-cover"
            ></Image>
            <label
              htmlFor="pfpinput"
              className="grid place-items-center absolute ml-7 -mt-48 rounded-md w-48 h-48 px-2 py-2 bg-gray-100 text-gray-700 cursor-pointer opacity-0 hover:opacity-50"
            >
              <CameraIcon className="w-10 h-10 text-gray-500 font-bold" />
              <input
                id="pfpinput"
                type="file"
                className="hidden"
                onChange={handlePfpChange}
              />
            </label>
          </div>
          <div className="w-full px-6 mt-4 relative">
            {!edit ? (
              <div className="text-3xl font-semibold ">{current.name}</div>
            ) : (
              <div className="flex gap-2 items-start">
                <label className="font-semibold mt-1">Your Name</label>
                <Input
                  inputSize="medium"
                  inputClassName="h-9 font-semibold text.lg bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
                  className="w-64"
                  value={userName}
                  withoutHelperText
                  onChange={nameHandler}
                />
              </div>
            )}
            {!edit ? (
              <div className="text-lg font-medium text-gray-700">
                {current.bio}
              </div>
            ) : (
              <div className="flex gap-7 items-start">
                <label className="font-semibold mt-4">Your Bio</label>
                <TextArea
                  className="!w-[350px] overflow-y-scroll resize-none"
                  value={userBio}
                  withoutHelperText
                  onChange={aboutHandler}
                />
              </div>
            )}
            {currentUserId == user._id &&
              (!edit ? (
                <div
                  className="absolute top-0 right-0 rounded-full p-2 border border-gray-200 drop-shadow-lg text-black hover:bg-indigo-700 hover:border-indigo-800 hover:text-white cursor-pointer"
                  onClick={!edit ? editHandler : saveHandler}
                >
                  <PencilIcon className=" w-5 h-5" />
                </div>
              ) : (
                <>
                  <div
                    className="absolute top-0 right-10 rounded-full p-2 border border-gray-200 drop-shadow-lg text-black hover:bg-indigo-700 hover:border-indigo-800 hover:text-white cursor-pointer"
                    onClick={!edit ? editHandler : saveHandler}
                  >
                    <CheckIconMini className=" w-5 h-5" />
                  </div>
                  <div
                    className="absolute top-0 right-0 rounded-full p-2 border border-gray-200 drop-shadow-lg text-black hover:bg-indigo-700 hover:border-indigo-800 hover:text-white cursor-pointer"
                    onClick={!edit ? editHandler : cancelHandler}
                  >
                    <XMarkIcon className=" w-5 h-5" />
                  </div>
                </>
              ))}
          </div>

          <div className="w-fit absolute bottom-0 text-center ml-14">
            <div className="text-gray-700 text-lg font-semibold absolute bottom-8">
              {user
                ? "$" + (user.expert.hourlyRate || "0") + " USD / Hour"
                : "$0 USD / Hour"}
            </div>
            {/* <p className="text-gray-800 text-lg font-medium">
              {expert ? expert.catagories[1] : ""}
            </p> */}
            <div className="flex w-36 float-left flex-wrap -mb-4">
              {user.expert
                ? user.expert.catagories.map((item) => (
                    <div
                      key={Math.random()}
                      className="bg-gray-300 text-gray-800 rounded-full w-fit px-4 text-sm m-0.5"
                    >
                      {item}
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>

      <hr className=" my-4 -mx-4 right-0 h-px bg-gray-800 border-0 dark:bg-gray-300" />
      <div className="">
        {user.isExpert ? (
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
        ) : (
          ""
        )}
        {user.isExpert ? (
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
        ) : (
          ""
        )}

        {user.isExpert ? (
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
        ) : (
          ""
        )}

        <button
          className={`text-lg ml-14
          ${
            active === "callender"
              ? "font-semibold text-[#394cac] underline"
              : "text-gray-500"
          }
          `}
          data-value="callender"
          onClick={handleClickDrawer}
        >
          Callender
        </button>
      </div>
    </Card>
  );
};

export default ProfileHeader;
