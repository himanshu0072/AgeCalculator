import React, { useState } from "react";

function Home({ onDateOfBirthChange }) {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDateOfBirth(selectedDate);
    console.log(selectedDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User's date of birth is:", dateOfBirth);
    onDateOfBirthChange(dateOfBirth);
  };

  return (
    <>
      <h1 className="textcenter">Accurate Age Calculater</h1>
      <div className="Container">
        <form className="Form" onSubmit={handleSubmit}>
          <label htmlFor="dob">Select your birth date</label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="dob"
            value={dateOfBirth}
            onChange={handleDateChange}
          ></input>
          <button type="submit" name="Submit" className="submit">
            →
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
