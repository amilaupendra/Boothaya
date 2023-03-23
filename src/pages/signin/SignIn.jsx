import React from "react";
import "./signin.css";
import { Form } from "react-bootstrap";
import { textAlign } from "@mui/system";

export default function SignIn() {

    const textalign ={
        textAlign : 'center'
    }

  return (
    <div className="login-form-div">
      <Form className="login-form col-lg-12">
        <h5 style={textalign}>Login</h5>
        <hr />
        <label htmlFor="username">User name</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="button" class="btn btn-light">Sign In</button>

        <a href="#"> Create Account</a>
      </Form>
    </div>
  );
}
