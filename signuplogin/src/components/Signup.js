import React from "react";
import axios from "axios";
export default function Signup(props) {
  const addToDB = () => {
    console.log("add to db");
    axios
      .post("http://localhost:3001/signup", {
        fullName: props.data.fullName,
        email: props.data.email,
        password: props.data.password,
      })
      .then(() => {
        console.log("Record is inserted Successfully");

        props.data.setalert(true);
      })
      .catch((err) => {
        console.log("record is not  inserted", err);
      });
  };

  return (
    <div className="container">
      <h1 className="m-3 text-center">Sign Up</h1>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Full Name
        </label>
        <input
          type="text"
          class="form-control"
          value={props.data.fullName}
          onChange={(e) => {
            props.data.setfullName(e.target.value);
          }}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          value={props.data.email}
          onChange={(e) => {
            props.data.setemail(e.target.value);
          }}
          id="exampleInputEmail1"
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
          value={props.data.password}
          onChange={(e) => {
            props.data.setpassword(e.target.value);
          }}
          id="exampleInputPassword1"
        />
      </div>

      <button onClick={addToDB} class="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
