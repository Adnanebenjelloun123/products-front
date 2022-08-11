import * as React from "react";
import {Route} from 'react-router-dom';
import MyLiveChat from "../pages/MyLiveChat";
import ConfirmEmail from "../pages/ConfirmEmail";
import {RouteWithoutLayout} from "react-admin";
import Support from "../pages/Support";

export const publicRoutes = {
    CONFIRM_EMAIL: "/confirm_email",
};

export default [
    <Route exact path="/my_live_chat" component={MyLiveChat}/>,
    <Route exact path="/support" component={Support}/>,
    <RouteWithoutLayout exact path="/confirm_email" component={ConfirmEmail}/>,
];