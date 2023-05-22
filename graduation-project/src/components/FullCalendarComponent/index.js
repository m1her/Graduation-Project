"use client";
import "./FullCalender.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
// import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useState, useRef } from "react";

const FullCalendarComponent = () => {
  const calendarRef = useRef();
  const handleAddEvent = () => {
    const newEvent = {
      title: "New Meeting",
      start: "2023-05-03T11:00:00",
      end: "2023-05-03T12:00:00",
      allDay: false,
    };
    setEvents([...events, newEvent]);
    calendarRef.current.getApi().addEvent(newEvent);
  };

  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: "2023-05-02T10:00:00",
      end: "2023-05-02T11:00:00",
      allDay: false,
    },
    {
      title: "Meeting",
      start: "2023-05-02T13:00:00",
      end: "2023-05-02T14:00:00",
      allDay: false,
      color: "gray",
    },
  ]);

  return (
    <div className="bg-white p-1 ml-44 w-[700px] h-[570px] rounded shadow-md relative">
      <FullCalendar
        headerToolbar={{
          left: "title",
          center: "",
          right: "prev,next", // user can switch between the two
        }}
        events={events}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        slotDuration="01:00:00"
        slotEventOverlap={true}
        ref={calendarRef}
      />
    </div>
  );
};
export default FullCalendarComponent;
