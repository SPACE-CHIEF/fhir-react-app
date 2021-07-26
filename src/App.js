import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home }  from "./components"
import { Appointments, MyGenetics, Launcher } from "./components";
import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <a id="top"></a>
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Launcher/>}></Route>
          <Route path="/Home" exact component={() => <Home/>}/>
          <Route path="/Appointments" exact component={() => <Appointments/>}/>
          <Route path="/myGenetics" exact component={() => <MyGenetics/>}/>
        </Switch>
        {/* <MobileMenu/> */}
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;