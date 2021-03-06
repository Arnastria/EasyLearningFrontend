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
import { EditReplyPage } from "../pages/EditReplyPage";
import { SearchPage } from "../pages/SearchPage";

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
                <LoginSuccess changePage={history.push} backToPrevious={history.goBack} />
            </Route>
            <Route path="/logout">
                <Logout onSuccess={history.push} backToPrevious={history.goBack} />
            </Route>
            <Route path="/search/q/:querySearch">
                <SearchPage changePage={history.push} backToPrevious={history.goBack} />
            </Route>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread/details/:id_thread">
                <ThreadPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread/:id_thread/reply/new">
                <WriteReplyPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread/:id_thread/reply/:id_reply/edit">
                <EditReplyPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread/new">
                <WriteThreadPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread/edit/:id_thread">
                <EditThreadPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/thread">
                <ThreadListPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/prequiz">
                <PreQuiz changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/assessment/start">
                <StartAssessment changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi/assessment">
                <AssessmentPage changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course/materi/:id_materi">
                <MateriSlide changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <AuthRoute path="/course/:id_gaya_belajar/:id_course">
                <Matkul changePage={history.push} backToPrevious={history.goBack} />
            </AuthRoute>
            <Route path="/500-error">
                <h1>Error 500</h1>
            </Route>
            <Route path="/404-error">
                <h1>Error 404</h1>
            </Route>
            <Route path="/">
                <Dashboard changePage={history.push} backToPrevious={history.goBack} />
            </Route>
        </Switch>
    );
}