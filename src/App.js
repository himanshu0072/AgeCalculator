import "./App.css";

function App() {
  return (
    <div className="Container">
      <form className="Form">
        <label htmlFor="dob">Select your birth date</label>

        <input type="date" name="dob" id="dob" className="dob"></input>
        <input
          type="button"
          name="Submit"
          className="submit"
          value={"→"}
        ></input>
      </form>
    </div>
  );
}

export default App;
