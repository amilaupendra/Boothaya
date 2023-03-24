import React from "react";
import { Form } from "react-bootstrap";
import "./signup.css";
import { useState } from "react";
import Axios from "axios";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addUser = () => {
    Axios.post("http://localhost:4000/create", {
      email: email, 
      username: username, 
      password: password,}).then((response) => {
        console.log(response);
      });
  };

  const handleEmailChange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(event.target.value);
    if (isValidEmail) {
      setEmail(event.target.value);
    }
  };

  return (
    <div className="signup-form-div">
      <Form className="signup-form">
        <h5>Sign Up</h5>
        <hr />

        <div className="signup-details">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            /*onChange={(event) => {
              setEmail(event.target.value);
            }}*/

            onChange={handleEmailChange}
            id="email"
            name="email"
            required
          />
        </div>

        <div className="signup-details">
          <label htmlFor="username">User Name</label>
          <input type="text" onChange={(event) => {
              setUsername(event.target.value);
            }} id="username" name="username" required/>
        </div>

        <div className="signup-details">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={(event) => {
              setPassword(event.target.value);
            }} id="password" name="password" required />
        </div>

        <button type="button" onClick={addUser} className="btn btn-light">
          Sign Up
        </button>
      </Form>
    </div>
  );
}
