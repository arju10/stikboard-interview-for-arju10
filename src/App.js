import react from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllLaunches from "./Components/Dashboard/AllLaunches/AllLaunches";
import SignleLaunch from "./Components/Dashboard/SingleLaunch/SignleLaunch";
import SignIn from "./Components/SignIn/SignIn";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Navbar from "./Components/Dashboard/Navbar/Navbar";
import Logout from "./Components/Logout/Logout";
import UpcomingLaunch from "./Components/Dashboard/UpcomingLaunch/UpcomingLaunch";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exaact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/launches">
          <AllLaunches />
        </Route>

        <Route path="/singleLaunch/:flight_number">
          <SignleLaunch />
        </Route>
<Route path= "/upcomingLaunch"><UpcomingLaunch/></Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
