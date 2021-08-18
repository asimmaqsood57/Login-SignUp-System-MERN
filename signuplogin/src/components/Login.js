import React from "react";

import axios from "axios";
import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginCredentiials = () => {
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then(() => {
        console.log("successfully logged in");
        return <Dashboard />;
      });
  };

  return (
    <div className="container">
      <h1 className="mt-3">Login</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button onClick={loginCredentiials} class="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
