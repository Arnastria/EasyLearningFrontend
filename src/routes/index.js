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
import { Dashboard } from "../pages/DashboardPage";

import { Matkul } from "../pages/MatkulPage";
import { MateriSlide } from "../pages/MateriSlide";
import { PreQuiz } from '../pages/PreQuizPage';
import { LoginSuccess } from "../pages/LoginSuccessPage";
import { userService } from '../utils/UserService';
import { Logout } from "../pages/Logout";

function AuthRoute(props) {
    const { path, children, exact, render } = props;

    const isAuthed = userService.getLocalData() != null;


    const authMessage = "You must be logged in to view this page";

    const matchPath = useRouteMatch(path);

    if (!isAuthed)
        return (
            <Route
                exact={exact}
                path={path}
                render={(props) => (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {
                                authMessage,
                                requestedPath: matchPath.url,
                            },
                        }}
                    />
                )}
            />
        );


    return (
        <Route exact={exact} path={path} render={render != null ? render : null}>
            {children}
        </Route>
    );
}

export function AppSwitch(props) {
    const history = useHistory();

    return (
        <Switch>
            <Route path="/loginSuccess/:token">
                <LoginSuccess changePage={history.push} />
            </Route>
            <Route path="/logout">
                <Logout onSuccess={history.push} />
            </Route>
            <AuthRoute path="/sister">
                <Matkul changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/materi">
                <MateriSlide changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/prequiz">
                <PreQuiz changePage={history.push} />
            </AuthRoute>
            <Route path="/500-error">
                <h1>Error Bruh</h1>
            </Route>
            <Route path="/">
                <Dashboard changePage={history.push} />
            </Route>
        </Switch>
    );
}