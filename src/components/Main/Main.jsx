import React from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Launcher, MyGenetics, Home, Appointments } from '../';
function Main(){
    return (
        <Switch>
            <Route path="/" exact component={() => <Launcher/>}/>
            <Route path="/Home" component={() => <Home/>}/>
            <Route path="/Appointments" component={() => <Appointments/>}/>
            <Route path="/myGenetics" component={() => <MyGenetics/>}/>
      </Switch>
    )
};

export default Main;