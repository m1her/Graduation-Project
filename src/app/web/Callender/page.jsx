"use client";
import FullCalendarComponent from "components/FullCalendarComponent";
import { useCurrentUser } from "Hooks";
const Callender = () => {
  const { user } = useCurrentUser();
  return (
    <FullCalendarComponent expertAvailableHours={user.expert.availableHours} />
  );
};

export default Callender;
