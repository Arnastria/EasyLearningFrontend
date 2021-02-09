import React from "react";
import { userService } from "../utils/UserService";

export function Logout(props) {

    if (localStorage.getItem("user") != null) {
        userService.logout()
    }

    props.onSuccess("/")

    return <>
    </>
}