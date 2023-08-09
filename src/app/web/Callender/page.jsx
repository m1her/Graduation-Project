"use client";
import { useState, useEffect } from "react";
import FullCalendarComponent from "components/FullCalendarComponent";
import { useAxios, useCurrentUser } from "Hooks";
import { AddSession, Button, NoSsr } from "components";

//TODO
//get all userEvents( Done)
//Display Them on calander( Done)
//add click button on avaliable hours( Done)
//open model after click on cell( Done)
// show him requier info for session( Done)
// make the request for adding the session( Done)
// pending status should be shown( Done)
//
const Callender = () => {
  const { userRole } = useCurrentUser();
  const { user } = useCurrentUser();
  const [calander, setCalander] = useState({});
  const [steps, setSteps] = useState(0);
  // const [sessions, setSessions] = useState([]);

  const {
    fetchData: uploadExpert,
    error,
    loading,
  } = useAxios({
    config: {
      url: `https://worrisome-pocketbook-calf.cyclic.app/api/v1/session?skip=${steps}`,
      method: "Get",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data);
      setCalander(data.data);

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
    uploadExpert();
  }, [steps]);

  return (
    <NoSsr>
      <div className="flex-col w-full">
        {userRole == "expert" && (
          <AddSession
            expertAvailableHours={user?.expert?.availableHours}
            addLoading={loading}
          />
        )}
        <FullCalendarComponent
          expertAvailableHours={user?.expert?.availableHours}
          calander={calander}
          setSteps={setSteps}
          steps={steps}
        />
      </div>
    </NoSsr>
  );
};

export default Callender;
