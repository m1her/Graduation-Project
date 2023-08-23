"use client";
import React from "react";
import CatagoryCard from "components/CatagoryCard";
import {
  Card,
  Featuers,
  Review,
  Statistics,
} from "components";
import { useCurrentUser } from "Hooks";

const Home = () => {
  const { userRole } = useCurrentUser();

  return (
    <div className="w-[80%] flex-col px-4 py-2">
      {userRole == "expert" && <Statistics />}
      <div>
        <p className="text-2xl font-semibold leading-6 text-gray-900 my-6">
          Categories
        </p>
        <div className="grid gap-4 grid-cols-3 grid-rows-2 w-full">
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Investment.jpg')]"}
            text="Investment"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Realestate1.jpg')]"}
            text="Real estate"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/SocialMedia.jpeg')]"}
            text="Social Media"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Technology1.jpg')]"}
            text="Technology"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Finance.png')]"}
            text="Finance"
          ></CatagoryCard>
          <Card className="cursor-pointer select-none w-full h-40 flex justify-center items-center  opacity-40 hover:bg-gray-700 hover:bg-opacity-50">
            <p className="text-xl text-gray-600">o o o</p>
          </Card>
        </div>
      </div>


      <div>
        <p className="font-semibold text-2xl leading-6 text-gray-900 my-6 ">
          Featuers
        </p>
        <Featuers />
      </div>
      <div>
        <p className="font-semibold text-2xl leading-6 text-gray-900 my-6 ">
          Top Rated Experts
        </p>
        <Review />
      </div>
    </div>
  );
};

export default Home;
