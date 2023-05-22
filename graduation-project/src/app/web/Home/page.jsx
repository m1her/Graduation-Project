"use client";
import React, { useState } from "react";
import CatagoryCard from "components/CatagoryCard";
import Calendar from "react-calendar";
import { Card, HomeCalender, Input, Select } from "components";
import { Datepicker } from "@mobiscroll/react";

import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
const Home = () => {
  const invest = () => {
    console.log("invest");
  };

  return (
    <div className="w-[80%] flex-col px-4 py-2">
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

      <div className="w-[20%]">
        <HomeCalender />
      </div>
    </div>
  );
};

export default Home;
