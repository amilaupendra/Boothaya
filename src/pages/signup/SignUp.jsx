import React from "react";
import { Form } from "react-bootstrap";
import "./signup.css";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const display =()=>{
    console.log(email,username,password);
  }

  return (
    <div className="signup-form-div">
      <Form className="signup-form">
        <h5>Sign Up</h5>
        <hr />

        <div className="signup-details">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            name="email"
          />
        </div>

        <div className="signup-details">
          <label htmlFor="username">User Name</label>
          <input type="text" onChange={(event) => {
              setUsername(event.target.value);
            }} id="username" name="username" />
        </div>

        <div className="signup-details">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(event) => {
              setPassword(event.target.value);
            }} id="password" name="password" />
        </div>

        <button type="button" class="btn btn-light">
          Sign Up
        </button>
      </Form>
    </div>
  );
}
