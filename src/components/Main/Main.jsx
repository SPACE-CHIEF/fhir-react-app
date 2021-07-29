import React from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Launcher, MyGenetics, Home, Schedule, Messages } from '../';
function Main(){
    return (
        <Switch>
            <Route path="/" exact component={() => <Launcher/>}/>
            <Route path="/Home" component={() => <Home/>}/>
            <Route path="/Appointments" component={() => <Schedule/>}/>
            <Route path="/myGenetics" component={() => <MyGenetics/>}/>
            <Route path="/Messages" component={() => <Messages/>}></Route>
        </Switch>
    )
};

export default Main;