"use client";
import { Card } from "components";
import { useRef } from "react";

const PostInput = ({ close }) => {
  const postRef = useRef();

  const postHandler = () => {
    console.log(postRef.current.value);
  };

  return (
    <div
      className="fixed top-0 left-0 min-h-screen h-full w-full bg-[#000000b7] grid place-items-center z-10"
      onClick={close}
    >
      <Card className="w-[400px] z-20" onClick={(e) => e.stopPropagation()}>
        <textarea
          ref={postRef}
          className="outline-none focus:outline-none w-full p-3 h-[100px] placeholder:text-base placeholder:font-extralight resize-none text-[#666666] border"
          placeholder="What About Today ?!"
        />
        <div className="w-full flex justify-end mt-4">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded w-16 h-8 flex items-center justify-center"
            onClick={postHandler}
          >
            Post
          </button>
        </div>
      </Card>
    </div>
  );
};
export default PostInput;
