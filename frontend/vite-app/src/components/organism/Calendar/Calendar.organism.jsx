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
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        formatShortWeekday={formatShortWeekday} 
        className="w-1/2 h-1/2"// Use the custom formatting function
      />
    </div>
  )
}

export default MyCalendar;
