import { useState, useEffect } from "react";
import { useAxios, useCurrentUser } from "Hooks";
import FullCalendarComponent from "components/FullCalendarComponent";
import { usePathname } from "next/navigation";
const Callender = ({ id }) => {
  const { user } = useCurrentUser();
  const [calander, setCalander] = useState({});
  const [steps, setSteps] = useState(0);
  // const [sessions, setSessions] = useState([]);
  const pathname = usePathname();
  // console.log( === pathname.split("/").at(3), ".split");
  const {
    fetchData: getExpertSessions,
    error,
    loading,
  } = useAxios({
    config: {
      url: `https://worrisome-pocketbook-calf.cyclic.app/api/v1/session/all?skip=${steps}&expertId=${id}`,
      method: "Get",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data, "expert profile calander");
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

  console.log(pathname.split("/").at(3), "user?.expert?._id");
  useEffect(() => {
    getExpertSessions();
  }, [steps]);

  return (
    <FullCalendarComponent
      expertAvailableHours={user?.expert?.availableHours}
      calander={calander}
      setSteps={setSteps}
    />
  );
};
export default Callender;
