"use client";
import React, { useState } from "react";
import CatagoryCard from "components/CatagoryCard";
import Calendar from "react-calendar";
import {
  Card,
  Featuers,
  HomeCalender,
  Input,
  Review,
  Select,
} from "components";
import { Datepicker } from "@mobiscroll/react";

import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
const Home = () => {
  const invest = () => {
    console.log("invest");
  };

  return (
    <div className="w-[80%] flex-col px-4 py-2">
      <p className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        {" "}
        Categories
      </p>
      <div className="grid gap-2 grid-cols-3 grid-rows-2 w-fit">
        <CatagoryCard
          bgUrl={"bg-[url('/assets/img/Catagories/Investment.jpg')]"}
          onClick={invest}
        >
          Investment
        </CatagoryCard>
        <CatagoryCard
          bgUrl={"bg-[url('/assets/img/Catagories/Realestate1.jpg')]"}
        >
          Realestate
        </CatagoryCard>
        <CatagoryCard
          bgUrl={"bg-[url('/assets/img/Catagories/SocialMedia.jpeg')]"}
        >
          Social Media
        </CatagoryCard>
        <CatagoryCard
          bgUrl={"bg-[url('/assets/img/Catagories/Technology1.jpg')]"}
        >
          Technology
        </CatagoryCard>
        <CatagoryCard bgUrl={"bg-[url('/assets/img/Catagories/Finance.png')]"}>
          Finance
        </CatagoryCard>
        <Card className="cursor-pointer select-none w-64 h-36 justify-center items-center flex opacity-40 hover:bg-gray-800 hover:bg-opacity-50">
          <p>○ ○ ○</p>
        </Card>
      </div>

      <HomeCalender />

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
