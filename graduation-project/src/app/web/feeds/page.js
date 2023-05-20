"use client";
import React, { useEffect, useState, useRef } from "react";
//import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProfileHeader from "featuers/pages/Profile/ProfileHeader";
import About from "featuers/pages/Profile/About";
import { Card, Input, Select } from "components";
import FullCalendarComponent from "components/FullCalendarComponent";
import CatagoryCard from "components/CatagoryCard";
import Image from "next/image";

const Feeds = () => {
  const [value, onChange] = useState(new Date());

  const invest = () => {
    console.log("invest");
  };

  return (
    <>
      <br></br>
      <br></br>

      <ProfileHeader />
      <About />
      {/* <FullCalendarComponent /> */}

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

      {/* Browser or experts list search
			<Card className="w-fit">
				<Card className="flex -m-4 mb-4 items-center w-fit shadow-md">
					<p className="text-xl font-semibold mr-56">Top Experts</p>
					<label for="catagories" className="mr-2 font-medium">
						Catagory
					</label>
					<Select
						name="catagories"
						id="catagories"
						placeholder="Chost Catagory"
						className="mr-8 text-sm"
						selectClassName="mt-1 h-9"
						selectSize="small"
						withoutHelperText="true"
						options={[
							{
								value: "Finance",
								label: "Finance",
							},
							{
								value: "Technology",
								label: "Technology",
							},
							{
								value: "SocialMedia",
								label: "Social Media",
							},
							{
								value: "Realestate",
								label: "Realestate",
							},
							{
								value: "Investment",
								label: "Investment",
							},
						]}
					/>

					<label for="sort" className="mr-2 font-medium">
						Sort By
					</label>
					<Select
						name="sort"
						id="sort"
						className="mr-8 text-sm mb-0"
						selectClassName="mt-1 h-9"
						selectSize="small"
						withoutHelperText="true"
						options={[
							{
								value: "Top",
								label: "Top",
							},
							{
								value: "LeastPrice",
								label: "Least Price",
							},
							{
								value: "MostRated",
								label: "Most Rated",
							},
							{
								value: "MostActive",
								label: "Most Active",
							},
						]}
					/>
				</Card>

				<div className="mt-4 mb-4 flex w-full">
					<Image
						alt="pfp"
						src="/assets/img/pfp.jpeg"
						height="100"
						width="100"
						className="w-36 h-36 object-cover rounded-md"
					></Image>
					<div className="ml-4 ">
						<p className="text-2xl">Simon William</p>
						<p className="text-gray-500 -mt-1">Rating!!!</p>
						<p className="text-sm font-bold ">
							Guiding people to online success!
						</p>
						<p className="text-sm w-[500px]">
							Genius people with a great sense of creativity who worked closely
							with me to produce something quite remarkable.
						</p>
						<p className="text-gray-500 text-xs mt-3">Social media </p>
					</div>
					<div className="float-right ml-7">
						<p className="text-2xl font-semibold">$15 USD</p>
						<p className="text-gray-500 -mt-2 ml-7">per hour</p>
						<div className="w-9 h-9 shadow self-center text-center mt-8 ml-10">
							□
						</div>
					</div>
				</div>
				<hr className="h-px -mx-4 bg-gray-800 border-0 dark:bg-gray-300 " />
			</Card> */}

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

      {/* //////////////////////Profile */}
      {/* <Card className="ml-10 relative w-[890px] h-[600px] rounded-sm">
        <div className="bg-center bg-[url('/assets/img/Catagories/Technology1.jpg')] bg-cover w-auto h-60 rounded-t-sm"></div>
        <div className="-mt-24 ml-7 rounded-md w-56 h-56 bg-[url('/assets/img/pfp.jpeg')] bg-cover"></div>
        <p className="ml-16 mt-4 text-xl font-semibold">$25 USD / Hour</p>
        <div className="float-right w-[590px] -mt-40">
          <p className="text-3xl font-semibold mt-2">Jeremy Karmer</p>
          <p className="font-semibold text-gray-400">
            Seeking investment success actively.
          </p>
          <p className="mt-12">
            As an investment expert with over 10 years of experience in the
            financial industry, I have a deep understanding of various
            investment vehicles and strategies. I have a proven track record of
            helping my clients achieve their financial goals through careful
            analysis and selection of appropriate investments. In addition to my
            financial expertise, I am also a strong communicator and excel at
            explaining complex investment concepts to clients in... more
          </p>
        </div>
        <hr className="absolute bottom-14 right-0 h-px w-full bg-gray-800 border-0 dark:bg-gray-300 " />
        <div className="absolute bottom-4 ml-28">
          <button className="text-lg text-gray-500">Posts</button>
          <button className="text-lg text-gray-500 ml-14">Resume</button>
          <button className="text-lg text-gray-500 ml-14">Schedule</button>
          <button className="text-lg text-gray-500 ml-14">Reviwes</button>
          <button className="text-lg font-semibold text-[#394cac] ml-14 under underline">
            About
          </button>
        </div>
      </Card>

      <Card className="ml-10 my-4 w-[890px] rounded-sm">
        <p className="text-xl font-semibold">Personal Information</p>
        <hr className=" h-px -mx-4 mt-4 bg-gray-800 border-0 dark:bg-gray-300" />
        <div className="grid gap-x-12 gap-y-8 my-8 ml-4 grid-cols-2 w-fit">
          <div className="text-gray-800">Salary</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
          <div className="text-gray-800">Email</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
          <div className="text-gray-800">Phone Number</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
          <div className="text-gray-800">Date Of Birth</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
          <div className="text-gray-800">Location</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
          <div className="text-gray-800">specialty</div>
          <Input
            inputSize="small"
            inputClassName="h-9 bg-gray-50 border border-gray-300 text-gray-900 rounded focus:border-gray-800 focus:outline-none focus:border-1"
            className="-mb-10"
          />
        </div>
      </Card> */}

      {/* catagory cards //////////// */}
      {/* <div className="grid gap-2 grid-cols-2 grid-rows-3 w-fit">
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
			</div> */}

      {/* <Calendar
				className="p-1 rounded-lg border-none shadow w-60 text-sm"
				onChange={onChange}
				value={value}
			/> */}
    </>
  );
};
export default Feeds;
