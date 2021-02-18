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
import { WriteThreadPage } from "../pages/WriteThreadPage";
import { ThreadListPage } from "../pages/ThreadListPage";
import { ThreadPage } from "../pages/ThreadPage";
import { StartAssessment } from "../pages/StartAssessment";
import { AssessmentPage } from "../pages/AssessmentPage";
import { EditThreadPage } from "../pages/EditThreadPage";
import { WriteReplyPage } from "../pages/WriteReplyPage";

function AuthRoute(props) {
    const { path, children, exact, render } = props;

    const isAuthed = userService.getLocalData() != null;
    // const isAuthed = true;


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
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread/details/:id_thread">
                <ThreadPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread/:id_thread/reply/new">
                <WriteReplyPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread/:id_thread/reply/:id_reply/edit">
                <ThreadPage changePage={history.push} />
                <h1>Reply Edit</h1>
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread/new">
                <WriteThreadPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread/edit/:id_thread">
                <EditThreadPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/thread">
                <ThreadListPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/prequiz">
                <PreQuiz changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/assessment/start">
                <StartAssessment changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi/assessment">
                <AssessmentPage changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course/materi/:id_materi">
                <MateriSlide changePage={history.push} />
            </AuthRoute>
            <AuthRoute path="/course/:id_course">
                <Matkul changePage={history.push} />
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