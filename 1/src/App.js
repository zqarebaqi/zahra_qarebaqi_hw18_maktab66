import React from "react";
import IsAuth from "./HOC/IsAuth";
import "./App.css";

function App({ name, handleLogOut }) {
  return (
    <div className="App">
      <div className="helloUser">
        <h4>سلام {name}</h4>
        <button onClick={handleLogOut}> خروج از حساب</button>
      </div>
    </div>
  );
}

export default IsAuth(App);
