import FullCalendarComponent from "components/FullCalendarComponent";
import { getStorageItem } from "utils";

const Callender = () => {
  const user = getStorageItem("User");
  //expertAvailableHours={user.expert.availableHours} 
  return <FullCalendarComponent />;
};
export default Callender;
