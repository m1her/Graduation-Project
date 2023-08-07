"use client";
import ChatBox from "./ChatBox";
import UsersChats from "./UsersChats";

const Messaging = () => {
  return (
    <div className="w-[80%] grid grid-cols-10 pr-4 pt-2 pb-4">
      <div className="col-span-7 pr-4">
        <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
          Meetings
        </div>
        <ChatBox />
      </div>

      <div className="col-span-3 flex-col items-center flex pt-[72px]">
        <UsersChats />
      </div>
    </div>
  );
};
export default Messaging;
