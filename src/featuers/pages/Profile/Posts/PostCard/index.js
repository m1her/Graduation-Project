"use client";
import {
  TrashIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Spinner } from "components";
import { SolidHeartIcon } from "lib";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PostCard = ({
  content,
  time,
  id,
  updatedPosts,
  setUpdatedPosts,
  name,
  profileImage,
  className,
}) => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likeFlag, setLikeFlag] = useState(false);

  const likeHandler = () => {
    setLikeFlag((prev) => !prev);
  };

  const toggleDeleteHandler = (e) => {
    e.stopPropagation();
    setToggleDelete((prev) => !prev);
  };

  const closeDelete = () => {
    setToggleDelete(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deletePosts();
  };
  const deletePosts = async () => {
    setLoading(true);
    const Token = localStorage.getItem("Token");
    try {
      const response = await fetch(
        `https://worrisome-pocketbook-calf.cyclic.app/api/v1/post/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const newUpdatedPosts = updatedPosts.filter((post) => post._id !== id);
      setUpdatedPosts(newUpdatedPosts);
      closeDelete();
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      closeDelete();
    }
  };

  return (
    <div className=" bg-white w-full " onClick={closeDelete}>
      <div className={`mb-0 mt-6 ${className}`}>
        <div className="flex items-top justify-between">
          <div className="flex items-center">
            <Image
              src={
                profileImage
                  ? `https://drive.google.com/uc?id=${profileImage}`
                  : "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"
              }
              className="w-11 h-11 rounded-full object-fit mr-2 shadow"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-end">
              <div className="text-lg font-semibold text-gray-900">{name}</div>
              <div className="text-xs text-gray-700">
                {Math.floor(
                  (new Date() - new Date(Date.parse(time))) / (1000 * 60)
                ) < 60
                  ? parseInt(
                      Math.floor(
                        (new Date() - new Date(Date.parse(time))) /
                          (1000 * 60) +
                          1
                      )
                    ) + " m"
                  : Math.floor(
                      (new Date() - new Date(Date.parse(time))) / (1000 * 60)
                    ) /
                      60 <
                    24
                  ? parseInt(
                      Math.floor(
                        (new Date() - new Date(Date.parse(time))) / (1000 * 60)
                      ) / 60
                    ) + " h"
                  : Math.floor(
                      (new Date() - new Date(Date.parse(time))) / 1000
                    ) /
                      (60 * 60 * 24) <
                    7
                  ? parseInt(
                      Math.floor(
                        (new Date() - new Date(Date.parse(time))) / 1000
                      ) /
                        (60 * 60 * 24)
                    ) + " d"
                  : Math.floor(
                      (new Date() - new Date(Date.parse(time))) / 1000
                    ) /
                      (60 * 60 * 24 * 7) <
                    4
                  ? parseInt(
                      Math.floor(
                        (new Date() - new Date(Date.parse(time))) / 1000
                      ) /
                        (60 * 60 * 24 * 7)
                    ) + " weeks"
                  : Math.floor(
                      (new Date() - new Date(Date.parse(time))) / 1000
                    ) /
                      (60 * 60 * 24 * 30) <
                    12
                  ? parseInt(
                      Math.floor(
                        (new Date() - new Date(Date.parse(time))) / 1000
                      ) /
                        (60 * 60 * 24 * 30)
                    ) + " monthes"
                  : parseInt(
                      (new Date() - new Date(Date.parse(time))) /
                        1000 /
                        (60 * 60 * 24 * 30 * 12)
                    ) + " year"}
              </div>
            </div>
          </div>
          <div className="relative">
            {toggleDelete && (
              <div
                className="absolute cursor-pointer text-gray-700 w-44 px-3 py-2 flex items-center bg-white shadow bottom-12 right-0"
                onClick={handleDelete}
                onBlur={closeDelete}
              >
                {loading ? (
                  <Spinner />
                ) : (
                  <TrashIcon className="text-gray-700 w-5 h-5 mr-2" /> &&
                  "Delete post"
                )}
              </div>
            )}

            <EllipsisHorizontalIcon
              className="text-gray-700 w-5 h-5 cursor-pointer"
              onClick={toggleDeleteHandler}
            />
          </div>
        </div>

        <div className="mt-3 text-gray-900 text-base font-medium">
          {content}
        </div>
        <hr className="mb-0 mt-2 -mx-4" />
        <div className="footer">
          <div className="grid grid-cols-3 -mx-4">
            <div className="col-span-1 ">
              <div className=" py-2 text-center flex justify-center items-center">
                <button
                  className="text-gray-500 no-underline flex items-center"
                  onClick={likeHandler}
                >
                  {likeFlag ? (
                    <SolidHeartIcon
                      height={15}
                      width={15}
                      className={`text-red-500 ${
                        likeFlag ? "" : "w-0 h-0"
                      } transition-all duration-300 ease-in-out`}
                    />
                  ) : (
                    <HeartIcon height={15} width={15} />
                  )}

                  <span className="px-1"> Like</span>
                </button>
              </div>
            </div>
            <div className="col border-l">
              <div className=" py-2 footer-btn text-center flex justify-center items-center">
                <button className="text-gray-500 font-thin no-underline flex items-center">
                  <ChatBubbleLeftIcon height={14} width={14} />
                  <span className="px-1"> Comment</span>
                </button>
              </div>
            </div>
            <div className="col border-l">
              <div className=" py-2 footer-btn text-center flex justify-center items-center">
                <Link
                  href=""
                  className="text-gray-500 font-thin no-underline flex items-center"
                >
                  <ShareIcon height={14} width={14} />
                  <span className="px-1"> Share</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-0 -mx-4" />
      </div>
    </div>
  );
};
export default PostCard;
