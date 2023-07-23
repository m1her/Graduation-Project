"use client";

import { CalendarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Rating from "components/Rating";
import Image from "next/image";

const SearchedUsersCard = ({ user }) => {
  return (
    <div className="flex w-full justify-between items-center border-b py-4">
      <div className="flex items-center">
        <Image
          alt="pfp"
          src="/assets/img/pfp.jpeg"
          height="100"
          width="100"
          className="w-28 h-28 object-cover object-center rounded-full"
        ></Image>
        <div className="ml-4 ">
          <div className="text-4xl font-semibold flex items-center">
            {user.name}{" "}
            <div className="mt-2 ml-2">
              <Rating rating={3.5} />
            </div>
          </div>
          <div className="text-lg font-light  ">{user.bio}</div>

          <div className="text-gray-500 text-xs mt-3">Social media Expert</div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between h-28">
        <div className="flex flex-col items-end">
          <div className="text-2xl font-semibold">$15 USD</div>
          <div className="text-gray-500 -mt-2">per hour</div>
        </div>
        <div className="flex">
          <div className="w-9 h-9 shadow p-1 mr-2"><EnvelopeIcon className="text-indigo-700" /></div>
          <div className="w-9 h-9 shadow p-1"><CalendarIcon className="text-indigo-700" /> </div>
        </div>
      </div>
    </div>
  );
};
export default SearchedUsersCard;
