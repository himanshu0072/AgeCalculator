import React, { useState } from "react";
import "./App.css";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value || "");
    console.log(dateOfBirth);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Users date of birth is:", dateOfBirth);
    // Add your logic to handle the form submission with the selected dateOfBirth here
  };

  return (
    <div className="Container">
      <form className="Form" onSubmit={handleSubmit}>
        <label htmlFor="dob">Select your birth date</label>

        <input
          type="date"
          name="dob"
          id="dob"
          className="dob"
          value={dateOfBirth || ""}
          onChange={handleDateChange} // Use onChange for capturing date changes
        ></input>
        <button type="submit" name="Submit" className="submit">
          →
        </button>
      </form>
    </div>
  );
}

export default App;
