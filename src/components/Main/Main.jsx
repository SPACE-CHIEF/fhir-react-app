import React from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Launcher, MyGenetics, Home, Appointments } from '../';
const Main = () => {
    return (
        <Switch>
            <Route path="/" component={Launcher}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Appointments" component={Appointments}/>
            <Route path="/myGenetics" component={MyGenetics} exact/>
      </Switch>
    )
};

export default Main;