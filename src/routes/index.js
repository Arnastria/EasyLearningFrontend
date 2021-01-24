import React from "react";

import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  useParams,
  useRouteMatch,
  useHistory
} from "react-router-dom";
import {Dashboard} from "../pages/dashboard";

import {Home} from '../pages/home';

export function AppSwitch(props) {
    const history = useHistory();

    return (
        <Switch>
            <Route path="/">
                <Dashboard changePage={history.push} />
            </Route>
        </Switch>

    );
}