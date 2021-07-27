import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home }  from "./components"
import { Appointments, MyGenetics, Launcher } from "./components";
import './scss/style.scss'

export default function App() {
  return (
      //<a id="top"></a>
        <Router>
            <Navigation/>
            <Switch>
              <Route exact path="/" exact component={() => <Launcher/>}/>
              <Route exact path="/Home" component={() => <Home/>}/>
              <Route exact path="/Appointments" component={() => <Appointments/>}/>
              <Route exact path="/myGenetics" component={() => <MyGenetics/>}/>
            </Switch>
            {/* <MobileMenu/> */}
            {/* <Footer/> */}
        </Router>
  );
}