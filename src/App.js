import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home }  from "./components"
import { Appointments, MyGenetics, Launcher } from "./components";
import { FhirClientProvider } from "./components";
import './scss/style.scss'

function App() {
  return (
    <div className="App">
      <a id="top"></a>
        <Router>
            <Switch>
              <Route path="/" exact component={() => <Launcher/>}></Route>
              <Route path="/Home" component={() => <Home/>}/>
              <Route path="/Appointments" component={() => <Appointments/>}/>
              <Route path="/myGenetics" component={() => <MyGenetics/>}/>
            </Switch>
            {/* <MobileMenu/> */}
            {/* <Footer/> */}
        </Router>
        <Navigation/>
    </div>
  );
}

export default App;