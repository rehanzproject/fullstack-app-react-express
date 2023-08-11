import React from "react";
import MyCalendar from "../../organism/Calendar/Calendar.organism";

function AdminCalendar() {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Calendar</h1>
        <p>
          Dashboard / <span className="text-blue-500 ">Calendar</span>{" "}
        </p>
      </div>
      <MyCalendar />
    </div>
  );
}

export default AdminCalendar;
