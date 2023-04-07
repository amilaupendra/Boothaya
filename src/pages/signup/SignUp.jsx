import React from "react";
import { Form } from "react-bootstrap";
import "./signup.css";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const addUser = () => {
    //input field validations
    const isPasswordValid = password.length >= 8;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    //after validation axios send api request
    if (isValidEmail && isPasswordValid) {
      Axios.post("http://localhost:4000/create", {
        email: email,
        username: username,
        password: password,
      }).then((response) => {
        navigate("/SignIn");
        console.log(response);
      });
    }else{
      const emailInput= document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const usernameInput = document.getElementById("username")
      emailInput.style.border="1px solid red";
      passwordInput.style.border="1px solid red";
      usernameInput.style.border="1px solid red";

      alert("Check username and password. username must be unique. try changing" );
    }
  };

  //email validation using reggex
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
            placeholder="john@gmail.com"
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
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            id="username"
            name="username"
            placeholder="johnx"
            required
          />
        </div>

        <div className="signup-details">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            id="password"
            name="password"
            placeholder="8 characters"
            required
          />
        </div>

        <button type="button" onClick={addUser} className="btn btn-light">
          Sign Up
        </button>

        <div className="rules" style={{width: "300px"}}>
          <p style={{ fontSize: "8px" }}>
            {" "}
            We do not share your any private details!
          </p>

          <p style={{ fontSize: "8px" }}>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
        </div>
      </Form>
    </div>
  );
}
