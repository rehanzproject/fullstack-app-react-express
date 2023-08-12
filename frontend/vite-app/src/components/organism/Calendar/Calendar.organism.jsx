import { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
function MyCalendar() {
  const [value, onChange] = useState(new Date());
  const formatShortWeekday = (locale, date) => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays[date.getDay()];
  };
  return (
    <div className="text-xs md:text-base md:w-full w-auto">
      <Calendar
        onChange={onChange}
        value={value}
        formatShortWeekday={formatShortWeekday}
      />
    </div>
  );
}

export default MyCalendar;
