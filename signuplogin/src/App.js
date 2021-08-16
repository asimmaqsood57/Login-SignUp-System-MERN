import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Signup />
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
