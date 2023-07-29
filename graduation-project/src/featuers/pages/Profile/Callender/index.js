import FullCalendarComponent from "components/FullCalendarComponent";
import { getStorageItem } from "utils";

const Callender = () => {
  const user = getStorageItem("User");

  return <FullCalendarComponent expertAvailableHours={user.expert.availableHours} />;
};
export default Callender;
