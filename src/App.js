import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.js";
import Main from "./Components/Main.js";
import Developer from "./Components/Developer.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/aboutdeveloper" element={<Developer />} />
      </Routes>
    </Router>
  );
}

export default App;
