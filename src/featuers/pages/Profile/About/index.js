"use client";
import { Card } from "components";
import {
  PencilIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
} from "lib";

const About = ({ user, handlePops, currentUserId }) => {
  const handlePop = () => {
    handlePops(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <Card className="ml-4 my-4 w-[280px] h-fit rounded-sm relative">
      <div className="w-full -mt-2">
        <p className="text-xl font-semibold">About</p>
        {currentUserId == user._id &&  <PencilIcon
          className="text-gray-700 h-5 w-5 absolute top-2 right-2 hover:text-indigo-700 hover:cursor-pointer"
          onClick={handlePop}
        />}
       
        <hr className=" h-px -mx-4 my-3 bg-gray-800 border-0 dark:bg-gray-300" />
      </div>
      <div className=" w-fit font-semibold right-0">
        <div
          className={`flex items-center align-middle ${
            user ? "mb-2" : "mb-[10px] mt-[14px]"
          }`}
        >
          <EnvelopeIcon className="text-white fill-black w-5 h-5" />
          <div className="ml-2">
            {user ? (
              user.email
            ) : (
              <div className="w-48 rounded-xl h-4 bg-gray-300 animate-pulse"></div>
            )}
          </div>
        </div>
        <div
          className={`flex items-center align-middle ${
            user ? "mb-2" : "mb-[12px] mt-3"
          }`}
        >
          <PhoneIcon className="fill-black w-5 h-5" />
          <div className="ml-2">
            {user ? (
              user.phone
            ) : (
              <div className="w-36 rounded-xl h-4 bg-gray-300 animate-pulse"></div>
            )}
          </div>
        </div>
        <div
          className={`flex items-center align-middle ${
            user ? "mb-2" : "mb-[12px]"
          }`}
        >
          <CalendarIcon className="text-white fill-black w-5 h-5" />
          <div className="ml-2">
            {user ? (
              new Date(user.dob).toLocaleDateString()
            ) : (
              <div className="w-24 rounded-xl h-4 bg-gray-300 animate-pulse"></div>
            )}
          </div>
        </div>
        <div
          className={`flex items-center align-middle ${
            user ? "mb-2" : "mb-[13px]"
          }`}
        >
          <MapPinIcon className="text-white fill-black w-5 h-5" />
          <div className="ml-2">
            {" "}
            {user ? (
              user.country
            ) : (
              <div className="w-24 rounded-xl h-4 bg-gray-300 animate-pulse"></div>
            )}
          </div>
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
