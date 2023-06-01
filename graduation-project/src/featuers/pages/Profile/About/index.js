"use client";
import { Card, Input, FileInput, Button } from "components";
import { getStorageItem } from "utils";
import {
  PencilIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
} from "lib";

const About = (props) => {
  const user = getStorageItem("User");

 
  const handlePop = () => {
    props.handlePops(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Card className="ml-4 my-4 w-[254px] rounded-sm relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">About</p>
        <PencilIcon
          className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer"
          onClick={handlePop}
        />
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>
      <div className=" w-fit font-semibold right-0">
        <div className="flex items-center align-middle mb-2">
          <EnvelopeIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">{user.email}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <PhoneIcon className="fill-black w-5 h-5" />
          <p className="ml-2">{user.phone}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <CalendarIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">{user.dob? new Date(user.dob).toLocaleDateString() : ""}</p>
        </div>
        <div className="flex items-center align-middle mb-2">
          <MapPinIcon className="text-white fill-black w-5 h-5" />
          <p className="ml-2">{user.country}</p>
        </div>
        {/* <div className="flex items-center align-middle mb-2">
          <TagIcon className=" fill-black w-5 h-5" />
          <p className="ml-2">Investment</p>
        </div> */}
      </div>
    </Card>
  );
};
export default About;
