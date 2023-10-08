import React, { useState, useEffect } from "react";
import "./Home.js";
import "../App.css";
import { useLocation } from "react-router-dom";

function Main(props) {
  const location = useLocation();
  const dateOfBirth = location.state?.dateOfBirth;

  // Function to calculate and format the age
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    // Calculate the time difference
    const timeDifference = currentDate - birthDate;

    // Calculate years, months, days, hours, minutes, seconds, and milliseconds
    const age = new Date(timeDifference);

    return {
      years: age.getUTCFullYear() - 1970,
      months: age.getUTCMonth(),
      days: age.getUTCDate() - 1, // Subtract 1 day as UTC date is 0-based
      hours: age.getUTCHours(),
      minutes: age.getUTCMinutes(),
      seconds: age.getUTCSeconds(),
      milliseconds: age.getUTCMilliseconds(),
    };
  };

  const [age, setAge] = useState(calculateAge(dateOfBirth));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedAge = calculateAge(dateOfBirth);
      setAge(updatedAge);
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, [dateOfBirth]);

  return (
    <>
      <h6 className="result">
        Age: {age.years} years, {age.months} months, {age.days} days,{" "}
        {age.hours} hours, {age.minutes} minutes, {age.seconds} seconds,{" "}
        {age.milliseconds} milliseconds
      </h6>
    </>
  );
}

export default Main;
