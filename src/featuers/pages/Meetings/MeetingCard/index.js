import Image from "next/image";
import { Card, Input, Select } from "components";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MeetingCard = () => {
  return (
    <Card className="flex w-full mt-2 justify-between items-center">
        <div className="flex items-center justify-between">
        <Image
        alt="pfp"
        src="/assets/img/pfp.jpeg"
        height="100"
        width="100"
        className="w-20 h-20 object-cover rounded-md"
      ></Image>
      <div className="ml-4 flex flex-col items-start">
        <p className="text-xl">Simon William</p>
        <p className="text-gray-500 -mt-1">introduction</p>
      </div> 
        </div>
     
      <div className=" text-center">
        <p className="text-gray-800">Oct 7/2023 | Monday</p>
        <p className="text-gray-800">9:00 - 10:00</p>
      </div>
      <div className="flex items-center justify-center">
      <div className="w-9 h-9 shadow self-center text-center flex items-center justify-center rounded">
        <EnvelopeIcon className="w-6 h-6 text-indigo-500" />
      </div>
      <div className="w-9 h-9 shadow self-center text-center ml-2 flex items-center justify-center rounded">
        <XMarkIcon className="w-5 h-5 text-red-500 border-2 border-red-500 rounded" />
      </div>
      </div>
    </Card>
  );
};
export default MeetingCard;
