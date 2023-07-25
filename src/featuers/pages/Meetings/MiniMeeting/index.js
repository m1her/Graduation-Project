import Image from "next/image";
import { Card, Input, Select } from "components";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MiniMeeting = () => {
  return (
    <div className="px-2 py-3 rounded shadow-inner flex w-full mt-2 justify-between items-center !bg-gray-100">
       <div className="flex items-center justify-between">
      <Image
        alt="pfp"
        src="/assets/img/pfp.jpeg"
        height="100"
        width="100"
        className="w-12 h-12 object-cover object-top rounded-md"
      ></Image>
      <div className="ml-1 flex flex-col items-start">
        <p className="">Simon William</p>
        <p className="text-xs text-gray-500 -mt-1">introduction</p>
      </div>
      </div>
      <div> <div className="text-gray-800 text-xs">9:00 - 10:00</div></div>
      <div className="flex items-center justify-center">
      <div className="w-6 h-6 shadow self-center text-center flex items-center justify-center rounded bg-gray-50">
        <EnvelopeIcon className="w-5 h-5 text-indigo-500" />
      </div>
      <div className="w-6 h-6 shadow self-center text-center ml-2 flex items-center justify-center rounded bg-gray-50">
        <XMarkIcon className="w-5 h-5 text-red-500 border-2 border-red-500 rounded" />
      </div>
      </div>
    </div>
  );
};
export default MiniMeeting;
