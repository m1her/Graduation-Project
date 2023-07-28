"use client";
import { TrashIcon, XMarkIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Spinner } from "components";
import Image from "next/image";
import { useState } from "react";

const PostCard = ({ content, time, id, updatedPosts, setUpdatedPosts }) => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDeleteHandler = (e) => {
    e.stopPropagation();
    setToggleDelete(prev => !prev);
  };

  const closeDelete = () => {
    setToggleDelete(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deletePosts();

  }

  

    const deletePosts = async () => {
      setLoading(true);
      const Token = localStorage.getItem("Token")
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
    }



  return (
    <div className=" bg-white w-full " onClick={closeDelete}>
      <div className="border-b border-gray-300 pb-4 mb-4">
        <div className="flex items-top justify-between">
          <div className="flex items-center">
            <Image
              className="w-12 h-12 rounded-full object-cover mr-4 shadow"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-end">
              <div className="text-lg font-semibold text-gray-900">
                Brad Adams
              </div>
              <div className="text-xs text-gray-700">
              {Math.floor(
                      (new Date() - new Date(Date.parse(time))) /
                        (1000 * 60)
                    ) < 59
                      ? parseInt(
                          Math.floor(
                            (new Date() -
                              new Date(Date.parse(time))) /
                              (1000 * 60)
                          )
                        ) + " m ago"
                      : Math.floor(
                          (new Date() - new Date(Date.parse(time))) /
                            (1000 * 60)
                        ) /
                          60 <
                        24
                      ? parseInt(
                          Math.floor(
                            (new Date() -
                              new Date(Date.parse(time))) /
                              (1000 * 60)
                          ) / 60
                        ) + " h ago"
                      : Math.floor(
                          (new Date() - new Date(Date.parse(time))) /
                            1000
                        ) /
                          (60 * 60 * 24) <
                        7
                      ? parseInt(
                          Math.floor(
                            (new Date() -
                              new Date(Date.parse(time))) /
                              1000
                          ) /
                            (60 * 60 * 24)
                        ) + " d ago"
                      : Math.floor(
                          (new Date() - new Date(Date.parse(time))) /
                            1000
                        ) /
                          (60 * 60 * 24 * 7) <
                        4
                      ? parseInt(
                          Math.floor(
                            (new Date() -
                              new Date(Date.parse(time))) /
                              1000
                          ) /
                            (60 * 60 * 24 * 7)
                        ) + " weeks"
                      : Math.floor(
                          (new Date() - new Date(Date.parse(time))) /
                            1000
                        ) /
                          (60 * 60 * 24 * 30) <
                        12
                      ? parseInt(
                          Math.floor(
                            (new Date() -
                              new Date(Date.parse(time))) /
                              1000
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
                 {loading ? <Spinner /> :
                <TrashIcon className="text-gray-700 w-5 h-5 mr-2" />
               && "Delete post" } 
              </div>
            )}

            <EllipsisHorizontalIcon
              className="text-gray-700 w-5 h-5 cursor-pointer"
              onClick={toggleDeleteHandler}
            />
          </div>
        </div>

        <p className="mt-3 text-gray-700 text-sm">
          {content}
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex mr-2 text-gray-700 text-sm">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>12</span>
          </div>
          <div className="flex text-gray-700 text-sm mr-8">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span>8</span>
          </div>
          <div className="flex mr-2 text-gray-700 text-sm">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-1"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <span>share</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
