"use client";
import "./FullCalender.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { useState, useRef, useEffect } from "react";

// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

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

  const eventClickHandler = (info) => {
    handleOpen();
    console.log(info.event.title);
  };

  // useEffect(() => {
  //   window.setTimeout(() => {
  //     window.dispatchEvent(new Event("resize"));
  //   }, 1000);
  // });

  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: "2023-07-13T14:00:00",
      end: "2023-07-13T14:00:00",
      allDay: false,
      color: "red",
      display: "block",
    },
    {
      title: "Meeting",
      start: "2023-07-11T14:00:00",
      end: "2023-07-11T14:00:00",
      allDay: false,
      color: "#ffea02",
      display: "list-item",
    },
    {
      title: "Meeting",
      start: "2023-07-12T14:00:00",
      end: "2023-07-12T14:00:00",
      allDay: false,
      color: "green",
      display: "background",
    },
    {
      title: "Meeting Meetin gMeet ingMeet ingMeet ing",
      description: "Meeting Meetin gMeet ingMeet ingMeet ing",
      start: "2023-07-13T13:00:00",
      end: "2023-07-13T13:00:00",
      allDay: false,
      color: "gray",
    },
  ]);

  return (
    <div className="bg-[#ffff] font-semibold p-1 w-[850px] my-4 rounded shadow-md text-black">
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
        themeSystem="Litera"
        eventTextColor="black"
        displayEventTime={false}
        eventBorderColor="red"
        eventClick={eventClickHandler}
      />
    </div>
  );
};
export default FullCalendarComponent;