import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

import Alert from "./components/Alert";

import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [fullName, setfullName] = useState("");
  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const [alert, setalert] = useState(false);

  return (
    <div>
      <Header />

      {alert ? <Alert /> : ""}
      <Switch>
        <Route exact path="/">
          <Signup
            data={{
              fullName,
              setfullName,
              email,
              setemail,
              password,
              setpassword,
              setalert,
            }}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
