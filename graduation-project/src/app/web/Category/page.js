"use client";
import CategoryBarCard from "featuers/pages/Categories/CategoryBarCard";
import ArticleCard from "featuers/pages/Categories/ArticleCard";
import CategoryExpertList from "featuers/pages/Categories/CategoryExpertList";
import PostCard from "featuers/pages/Profile/Posts/PostCard";
import { Card } from "components";
import Image from "next/image";
const Category = () => {
  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        Category Name
      </div>
      <CategoryBarCard />
      <div className="w-full flex justify-between items-start mt-4">
        <ArticleCard />
        <CategoryExpertList />
      </div>
      <div className="text-2xl font-light leading-6 text-gray-900 my-6">
        Finance Posts
      </div>
      <div className="flex items-start justify-between">
        <div className=" w-[60%]">
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
        </div>
        <div className=" w-[38%]">
          <div className=" text-xl text-justify aspect-square w-full flex justify-center items-end relative shadow-md rounded-lg">
            <div className=" bg-[#ffffffd8] rounded-lg p-4 select-none">
              Embrace the challenges of finance with unwavering determination,
              for within every obstacle lies an opportunity for growth and
              success.
            </div>
            <Image
              src="/CattegoryPageImages/FinanceInspirational.jpeg"
              fill
              alt=" "
              className="object-cover object-top rounded-lg -z-10"
            />
            <div className="-z-10 rounded-lg absolute top-0 left-0 bg-indigo-500 mix-blend-color h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
