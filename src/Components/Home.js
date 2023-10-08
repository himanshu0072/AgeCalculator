import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (event) => {
    setDateOfBirth(event.target.value || "");
    console.log(dateOfBirth);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Users date of birth is:", dateOfBirth);
    navigate("/main", { state: { dateOfBirth } });
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
          onChange={handleDateChange}
        ></input>
        <button type="submit" name="Submit" className="submit">
          <a href="/main" className="submit">
            →
          </a>
        </button>
      </form>
    </div>
  );
}

export default Home;
