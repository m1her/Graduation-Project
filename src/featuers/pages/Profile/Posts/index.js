"use client";
import { PencilIcon, PlusIcon } from "lib";
import { Card } from "components";
import PostCard from "./PostCard";
import PostInput from "./PostInput";
import { useState } from "react";

const Posts = () => {
  const [postInputVisibility, setPostInputVisibility] = useState(false);
  const openPostInput = () => {
    setPostInputVisibility(true);
  };
  const closePostInput = () => {
    setPostInputVisibility(false);
  };
  return (
    <Card className=" my-4 pb-0 rounded-sm w-[580px] ">
      {postInputVisibility && <PostInput close={closePostInput} />}
      <div className="w-full flex items-center justify-between">
        <div className="text-xl font-semibold -mt-2">Posts</div>
        <div className="flex items-center">
          <button
            className="flex rounded bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-1 py-2"
            onClick={openPostInput}
          >
            <PlusIcon className="text-white h-5 w-5" />
            Create new post
          </button>
        </div>
      </div>
      <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      <PostCard />
      <PostCard />
      <PostCard />
    </Card>
  );
};
export default Posts;
