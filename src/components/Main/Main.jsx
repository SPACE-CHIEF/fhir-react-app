import React from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Launcher, MyGenetics, Home, Schedule} from '../';
function Main(){
    return (
        <Switch>
            <Route path="/" exact component={() => <Launcher/>}/>
            <Route path="/Home" component={() => <Home/>}/>
            <Route path="/Appointments" component={() => <Schedule/>}/>
            <Route path="/myGenetics" component={() => <MyGenetics/>}/>
        </Switch>
    )
};

export default Main;