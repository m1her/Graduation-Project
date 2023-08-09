"use client";
import MeetingCard from "./MeetingCard";
import MiniMeeting from "./MiniMeeting";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState, useRef } from "react";
import { HomeCalender } from "components";
import DateCalendar from "./DateCalendar";
import Link from "next/link";
import { useAxios } from "Hooks";

const MeetingsPage = () => {
  const [allSessions, setAllSessions] = useState();
  const [mutate, setMutate] = useState(0);
  const {
    fetchData: getAllSessions,
    error,
    loading,
  } = useAxios({
    config: {
      url: `https://worrisome-pocketbook-calf.cyclic.app/api/v1/session`,
      method: "Get",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data, "All Sessions");
      setAllSessions(data.data);
      setMutate((prev) => prev + 1);
      // close();
      // openSnack();
    },
    onError: (data) => {
      // setErrorMeesage(data.message);
      // close();
      // openErrorSnack();
    },
  });

  useEffect(() => {
    getAllSessions();
  }, [getAllSessions]);

  return (
    <div className="w-[100%] h-[70vh]  overflow-auto mx-auto  grid grid-cols-6 px-4 pt-2 pb-4">
      <div className="col-span-7 pr-4 ">
        <p className="text-2xl font-semibold leading-6 text-gray-900 my-6">
          Meetings
        </p>
        {allSessions?.data.map((session, index) => {
          return <MeetingCard key={index} sessionData={session} />;
        })}
      </div>

      {/* <div className="col-span-3 flex-col items-center flex pt-24">
        {/* <Calendar
				className="p-1 rounded-lg border-none shadow w-full aspect-square text-sm"
				onChange={onChange}
				value={value}
			/>  */}
      {/* <div className="p-1 rounded-lg border-none shadow w-fit text-sm bg-white">
          <DateCalendar />
          <div className="flex justify-between px-2 items-center">
          <p className="text-gray-800 font-semibold ">Oct 7/2023 | Monday</p>
<Link href="" className="text-white rounded font-semibold px-2 py-1 bg-gradient-to-bl from-indigo-600 to-purple-500">Book</Link>
          </div>
          <MiniMeeting />
          <MiniMeeting />
        </div>
      </div>  */}
    </div>
  );
};
export default MeetingsPage;
