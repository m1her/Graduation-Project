"use client";
import { Card, Spinner } from "components";
import { useRef, useState } from "react";

const PostInput = ({ close, updatedPosts, setUpdatedPosts }) => {
  const [loading, setLoading] = useState(false);
  const postRef = useRef();

  const postHandler = async () => {
    if (postRef.current.value != "") {
      setLoading(true);
    const Token = localStorage.getItem("Token");
    try {
      const response = await fetch(
        "https://worrisome-pocketbook-calf.cyclic.app/api/v1/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
          body: JSON.stringify({
            title: postRef.current.value,
            content: postRef.current.value,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.data.post);
      setUpdatedPosts((prev => [data.data.post, ...prev]))
      setLoading(false);
      close();
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
    } else {
      
    }
    
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
            {loading? <Spinner /> : "Post"}
          </button>
        </div>
      </Card>
    </div>
  );
};
export default PostInput;
