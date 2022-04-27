import axios from 'axios';

export const http = axios.create({
    baseURL: "http://localhost/api/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

var token = localStorage.getItem("token");

if (token != null) {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers({
            "Authorization": "Bearer " + localStorage.getItem("token")
        });
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
}