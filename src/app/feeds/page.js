"use client";
import React, { useEffect, useState, useRef } from "react";
//import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card, Input, Select } from "components";
import FullCalendarComponent from "components/FullCalendarComponent";

import CatagoryCard from "components/CatagoryCard";
import Image from "next/image";
import FullCalendar from "@fullcalendar/react";

const Feeds = () => {
  const [value, onChange] = useState(new Date());

  const invest = () => {
    console.log("invest");
  };

  return (
    <body>
      <div>
        <br></br>
        <br></br>



           

     <FullCalendarComponent />  

        {/*      payment popups screens

	  <Card className="p-8 w-[400px] ml-[400px] bg-gray-light">
		<div className="text-gray-400 text-xs text-center -mt-6 mb-6">〇〇⬤</div>
        <p className="text-2xl">
          <span className="text-3xl mr-16">&#8249;</span> Review Summary
        </p>
        <div className="bg-white mt-6 p-4 rounded-md shadow-lg">
          <Image
            alt="pfp"
            src="/assets/img/pfp.jpeg"
            height="100"
            width="100"
            className="-mt-12 w-20 h-20 object-cover rounded-md inline-block"
          ></Image>
          <div className="ml-4 inline-block">
            <p className="font-semibold">Carl Driffith</p>
            <p className="-mt-2">Rating</p>
            <hr className="my-2 h-px w-48 bg-gray-800 border-0 dark:bg-gray-300 " />
            <p className="text-xs font-semibold">Social Media Expert</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 rounded-md shadow-lg h-fit">
          <div className="my-2 clear-both -mt-2">
            <p className="text-sm font-semibold float-left">Date & Hour</p>
            <p className="text-sm font-bold float-right">
              Oct 4, 2023 | 20:00 PM
            </p>
          </div>

          <div className="my-2 clear-both">
            <p className="text-sm font-semibold float-left">Amount</p>
            <p className="text-sm font-bold float-right">$15</p>
          </div>

          <div className="my-2 clear-both">
            <p className="text-sm font-semibold float-left">
              Duration (1 hour)
            </p>
            <p className="text-sm font-bold float-right">1 x $15</p>
          </div>
          <hr className="mt-10 h-px bg-gray-800 border-0 dark:bg-gray-300 clear-both" />
          <div className="my-2 clear-both mb-6">
            <p className="text-sm font-semibold float-left">Total</p>
            <p className="text-sm font-bold float-right">$15</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 rounded-md shadow-lg items-center">
          <Image
            alt="pfp"
            src="/assets/img/Paypal_2014_logo - Copy.png"
            height="20"
            width="20"
            className=" w-8 h-8 object-cover rounded-md inline-block"
          ></Image>
          <p className="font-semibold inline-block ml-2">Carl Dri..... </p>
          <button className="float-right text-indigo-800 hover:underline hover:text-indigo-600">
            Change
          </button>
        </div>
          <button className="w-full h-12 bg-indigo-700 hover:bg-indigo-800 rounded text-white text-lg font-semibold mt-4">
            Confirm
          </button>
      </Card>
      <Card className="p-8 w-[400px] h-[500px] ml-[400px] bg-gray-light relative">
        <div className="text-gray-400 text-xs text-center -mt-6 mb-6">
          〇⬤〇
        </div>
        <p className="text-2xl">
          <span className="text-3xl mr-[102px]">&#8249;</span> Payments
        </p>
        <p className="text-lg text-center mt-4">Select your payment method.</p>

        <div className="bg-white mt-6 p-4 rounded-md drop-shadow-2xl content-center relative">
          <Image
            alt="pfp"
            src="/assets/img/Paypal_2014_logo - Copy.png"
            height="10"
            width="10"
            className="w-8 h-8 object-cover rounded-md inline-block "
          ></Image>
          <p className="text-xl font-black font-mono ml-4 inline-block">
            PayPal
          </p>
          <input
            type="radio"
            name="paymentMethod"
            className="float-right absolute right-4 top-50% translate-y-1/2"
          ></input>
        </div>
        <button className="w-full h-10 text-indigo-600 bg-indigo-200 hover:bg-indigo-300 hover:text-indigo-700 rounded-full text-lg font-semibold mt-8">
          Add New Method
        </button>

        <button className="absolute bottom-8 left-8 right-0 w-10/12 h-12 bg-indigo-700 hover:bg-indigo-800 rounded text-white text-lg font-semibold ">
          Next
        </button>
      </Card> 
      <Card className="p-8 w-[400px] h-[550px] ml-[400px] bg-gray-light relative">
        <div className="text-gray-400 text-xs text-center -mt-6 mb-6">
          ⬤〇〇
        </div>
        <p className="text-2xl">
          <span className="text-3xl mr-16">&#8249;</span> Booking Details
        </p>

        <Input
          label="Meeting Title*"
          type="text"
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          withoutHelperText
          className="mt-4"
        />
        <Select
          label="Select Duration"
          name="catagories"
          id="catagories"
          className="text-sm mt-4"
          selectClassName="h-9"
          labelClassName="block mb-2 text-sm font-bold text-gray-900"
          selectSize="small"
          withoutHelperText="true"
          options={[
            {
              value: "1-hour",
              label: "1 hour",
            },
            {
              value: "2-hours",
              label: "2 hour",
            },
            {
              value: "3-hours",
              label: "3 hour",
            },
          ]}
        />
        <div className="mt-4">
          <label
            for="MeetingPurpose"
            className="block mb-2 text-sm font-bold text-gray-900"
          >
            Meeting Purpose
          </label>
          <textarea
            id="MeetingPurpose"
            name="MeetingPurpose"
            rows="5"
            cols="46"
            className="resize-none px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:outline-none focus:border-gray-700 block"
          ></textarea>
        </div>

        <button className="absolute bottom-8 left-8 right-0 w-10/12 h-12 bg-indigo-700 hover:bg-indigo-800 rounded text-white text-lg font-semibold ">
          Next
        </button>
      </Card>*/}


        {/* ///////////////////////////// meetings card
			 <Card className="flex w-fit">
				<Image
					alt="pfp"
					src="/assets/img/pfp.jpeg"
					height="100"
					width="100"
					className="w-20 h-20 object-cover rounded-md"
				></Image>
				<div className="ml-4 mt-4">
				<p className="text-xl">Simon William</p>
				<p className="text-gray-500 -mt-1">introduction</p>
				</div>
				<div className="ml-16 mt-4 text-center">
				<p className="text-gray-800">Oct 7/2023 | Monday</p>
				<p className="text-gray-800">9:00 - 10:00</p>
				</div>
				<div className="w-9 h-9 shadow self-center text-center ml-16">□</div>
				<div className="w-9 h-9 shadow self-center text-center ml-2">□</div>
			</Card> */}

      
        {/* <Calendar
				className="p-1 rounded-lg border-none shadow w-60 text-sm"
				onChange={onChange}
				value={value}
			/> */}
      </div>
    </body>
  );
};
export default Feeds;
