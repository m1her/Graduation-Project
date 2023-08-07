import Image from "next/image";
import { Card, Input, Select, ApproveSession } from "components";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useCurrentUser } from "Hooks";
import { Button } from "@material-tailwind/react";
function convertTimeFormat(input) {
  const date = new Date(input);

  // Check if the date is valid
  if (isNaN(date)) {
    // Handle other potential formats here
    console.log("Invalid date format:", input);
    return "";
  }

  const options = {
    month: "short", // Short month name (e.g., Aug)
    day: "numeric", // Day of the month (e.g., 8)
    year: "numeric", // Full year (e.g., 2023)
    weekday: "long", // Full weekday name (e.g., Monday)
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate;
}
function formatHoursRange(startTime, endTime) {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // Format hours and minutes
  const formatTime = (date) => {
    const hours = date.getHours() % 12 || 12;
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const amPm = date.getHours() < 12 ? "AM" : "PM";
    return `${hours}:${minutes} ${amPm}`;
  };

  // Construct the formatted time range
  const formattedTimeRange = `${formatTime(startDate)} - ${formatTime(
    endDate
  )}`;
  return formattedTimeRange;
}
const cardStatus = (status) => {
  if (status == "pending") {
    return "#FFC300";
  } else if (status == "approved") {
    return "#84cc16";
  } else {
    return "#ff0000";
  }
};
const MeetingCard = ({ sessionData }) => {
  console.log("Session Data:", sessionData);
  const { userRole } = useCurrentUser();
  const expetObject =
    userRole != "expert" ? sessionData?.expert : sessionData?.user;
  const sessionObject = sessionData?.session;

  return (
    <Card
      className={`flex w-full mt-2 justify-between items-center cursor-pointer hover:bg-gray-light  border-l-4  border-[${cardStatus(
        sessionObject?.status
      )}]`}
    >
      <div className="flex items-center  justify-between">
        <Image
          alt="pfp"
          src="/assets/img/pfp.jpeg"
          height="100"
          width="100"
          className="w-20 h-20 object-cover rounded-full"
        ></Image>
        <div className="ml-4 flex flex-col items-start">
          <p className="text-xl font-semibold my-2">
            {expetObject?.user?.name.toUpperCase()}
          </p>
          <p className="text-sm">{expetObject?.email}</p>
          <p className="text-gray-500 -mt-1">
            {expetObject?.expertBio || expetObject?.bio}
          </p>
        </div>
      </div>

      <div className=" text-center">
        <p className="text-gray-800">
          {convertTimeFormat(sessionObject?.startTime)}
        </p>
        <p className="text-gray-800">
          {formatHoursRange(sessionObject?.startTime, sessionObject?.endTime)}
        </p>
      </div>
      <div className="flex-col items-center justify-center">
        {userRole != "expert" && (
          <div className=" font-semibold text-2xl my-4">
            {expetObject?.hourlyRate}/
            {sessionObject?.payment?.currency?.toUpperCase()}
          </div>
        )}
        <div className="flex items-center justify-center">
          <div className="w-9 h-9  self-center text-center flex items-center justify-center cursor-pointer">
            <ApproveSession action="approve" id={sessionObject._id} />
          </div>

          <div className="w-9 h-9  self-center text-center ml-2 flex items-center justify-center  cursor-pointer">
            <ApproveSession action="reject" id={sessionObject._id} />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default MeetingCard;
