"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useAxios } from "Hooks";
import { Card, Room, MeetingCall } from "components";
import MeetingCard from "../../../featuers/pages/Meetings/MeetingCard";
// import VideoChat from "components/VideoChat";

const Session = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [session, setSession] = useState();
  const {
    fetchData: getSession,
    error,
    loading,
  } = useAxios({
    config: {
      url: `https://worrisome-pocketbook-calf.cyclic.app/api/v1/session/${id}`,
      method: "Get",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data);
      setSession(data.data);

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
    getSession();
  }, [getSession]);

  return (
    <div className="w-[80%] h-[75vh] flex-col  overflow-auto justify-between gap-8 p-10">
      {loading && (
        <div className="flex items-center justify-center h-screen w-[80%]">
          <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin w-12 h-12"></div>
        </div>
      )}
      {/* <ColorMeaningComponent /> */}
      <div>
        <MeetingCard sessionData={session} />
      </div>
      <div>
        <Card className="w-full h-full  my-4">
          <h2>The Session will Be Here</h2>
          <MeetingCall />
          {/* <VideoChat /> */}
          {/* <Room /> */}
        </Card>
      </div>
      <div>
        {/* rating the session with its review rating stars and the expert feedback   */}
      </div>
    </div>
  );
};

export default Session;

// const ColorMeaningComponent = () => {
//   const colors = [
//     { name: "red", meaning: "Session Cancelled" },
//     { name: "[#FFC300]", meaning: "Session Pending" },
//     { name: "[#84cc16]", meaning: "Session Approved" },
//   ];

//   return (
//     <div>
//       <ul>
//         {colors.map((color) => (
//           <li key={color.name}>
//             {color.meaning} :<span className={`!bg-${color.name} p-3 `}></span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
