import { authHeader } from "./AuthHeader";
import APIUtility from "./APIUtility";

export const userService = {
    login,
    logout,
    getLocalData,
    getName,
    getProfile,
    getLearningModel,
}

function login(token) {
    let user = localStorage.getItem('user');
    console.log(user)
    if (!user) {
        let userObject = {
            token: token,
        };
        localStorage.setItem("user", JSON.stringify(userObject));
    }
    return APIUtility.get("/profile")
        .then(function (response) {
            const profile = JSON.parse(response.data['profile'])
            localStorage.setItem('profile', JSON.stringify(profile[0]))
            console.log("===?")
            console.log(response)
            return response.data;
        }).catch(function (error) {

            localStorage.removeItem("user");
            console.log(error.message);
            console.log("removing user");
            window.location.replace("/500-error");
        });
}

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("profile");
    console.log("removing user");
    console.log("removing profile");
    console.log('success logout');
}

function getLocalData() {
    return localStorage.getItem("user");
}

function getProfile() {
    return JSON.parse(localStorage.getItem("profile"));
}

function getName() {
    return JSON.parse(localStorage.getItem("profile"))['fields']['name'];
}

function getLearningModel() {
    return JSON.parse(localStorage.getItem("profile"))['fields']['learning_model'];
}