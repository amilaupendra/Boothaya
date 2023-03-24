import React, { useState } from "react";
import Home from "../home/Home";
import "./signin.css";
import Axios from "axios";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate= useNavigate();

  const signin = () => {
    Axios.post("http://localhost:4000/signin", {
      username: username,
      password: password,
    }).then((response) => {
      navigate("/Home");
      console.log(response.data);
    });
  };

  const textalign = {
    textAlign: "center",
  };

  return (
    <div className="signin-form-div">
      <Form className="signin-form">
        <h5 style={textalign}>Sign In</h5>
        <hr />
        <label htmlFor="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="button" className="btn btn-light" onClick={signin}>
          Sign In
        </button>

        <Link to="/signup"> Create Account</Link>
      </Form>
    </div>
  );
}
