import React, { useState } from "react";
import Home from "./Components/Home.js";
import Main from "./Components/Main.js";
import Developer from "./Components/Developer.js";
import "./App.css";

function App() {
  const [dateOfBirth, setDateOfBirth] = useState("00-00-0000");
  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  return (
    <div className="App">
      <Home onDateOfBirthChange={handleDateOfBirthChange} />
      <Main dateOfBirth={dateOfBirth} />
      <Developer />
    </div>
  );
}

export default App;
