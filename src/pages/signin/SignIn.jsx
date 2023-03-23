import React from "react";
import "./signin.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";

export default function SignIn() {

    const textalign ={
        textAlign : 'center'
    }

  return (
    <div className="signin-form-div">
      <Form className="signin-form">
        <h5 style={textalign}>Sign In</h5>
        <hr />
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="button" className="btn btn-light">Sign In</button>

        <Link to="/signup"> Create Account</Link>
      </Form>
    </div>
  );
}
