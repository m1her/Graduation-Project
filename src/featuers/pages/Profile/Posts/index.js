"use client";
import { PencilIcon, PlusIcon } from "lib";
import { Card, Spinner } from "components";
import PostCard from "./PostCard";
import PostInput from "./PostInput";
import { useEffect, useState } from "react";

const Posts = ({ posts, noPosts, isVisitor, name, profileImage }) => {
  const [postInputVisibility, setPostInputVisibility] = useState(false);
  const [updatedPosts, setUpdatedPosts] = useState([]);
  const openPostInput = () => {
    setPostInputVisibility(true);
  };
  const closePostInput = () => {
    setPostInputVisibility(false);
  };

  useEffect(() => {
    setUpdatedPosts([...posts].reverse());
  }, [posts]);

  return (
    <Card className=" my-4 pb-0 rounded-sm w-full ">
      {postInputVisibility && (
        <PostInput
          updatedPosts={updatedPosts}
          setUpdatedPosts={setUpdatedPosts}
          close={closePostInput}
        />
      )}
      <div className="w-full flex items-center justify-between">
        <div className="text-xl font-semibold -mt-2">Posts</div>
       {isVisitor && <div className="flex items-center">
          <button
            className="flex rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-1 py-2"
            onClick={openPostInput}
          >
            <PlusIcon className="text-white h-5 w-5" />
            Create new post
          </button>
        </div>}
      </div>
      <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      {updatedPosts.length != 0 ? (
        updatedPosts.map((item) => (
          <PostCard
            key={item._id}
            id={item._id}
            name={name}
            content={item.content}
            time={item.createdAt}
            updatedPosts={updatedPosts}
            setUpdatedPosts={setUpdatedPosts}
            profileImage={profileImage}
          />
        ))
      ) : noPosts != "" ? (
        <div className="font-sm text-gray-400 w-full text-center">
          {noPosts}
        </div>
      ) : (
        <div className=" w-full flex justify-center">
          <Spinner />
        </div>
      )}
    </Card>
  );
};
export default Posts;
