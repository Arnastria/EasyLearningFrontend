import axios from "axios";
import { authHeader } from "./AuthHeader";


const instance = axios.create({
    baseURL: "https://skripz-backend.herokuapp.com/",
    responseType: "json",
    headers: {
        ...authHeader(),
        "Accept": "application/json",
    },
});


instance.interceptors.request.use(function (config) {
    const token = authHeader().Authorization;
    config.headers.Authorization = token;

    return config;
})

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    try {
        if (error.response.status == 500) {
            window.location.replace("/500-error");
        }
    } catch {
        window.location.replace("/500-error");
    }

    return Promise.reject(error);
});

export default instance;