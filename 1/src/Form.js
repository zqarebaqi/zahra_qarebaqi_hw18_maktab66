import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
import "./form.css";
const Form = () => {
  let [formtype, setformtype] = useState("login");

  return (
    <div className="container">
      <div className="app">
        <div className="tab">
          <div>
            {" "}
            <button
              style={{ background: "#1eae89", border: "0px" }}
              onClick={() => {
                setformtype("login");
              }}
            >
              ورود{" "}
            </button>
          </div>
          <div>
            <button
              style={{ background: "#1eae89", border: "0px" }}
              onClick={() => {
                setformtype("register");
              }}
            >
              ثبت نام{" "}
            </button>
          </div>
        </div>

        {formtype === "login" && <Login />}
        {formtype === "register" && <Register />}
      </div>
    </div>
  );
};

export default Form;
