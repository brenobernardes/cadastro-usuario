import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/register";
import Lawyer from "./pages/Lawyer/lawyer";

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/registro" component={Register} />
                <Route path="/cadastro" component={Lawyer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;