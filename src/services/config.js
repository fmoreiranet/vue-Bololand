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
    // Request interceptors for API calls
    axios.interceptors.request.use(
        config => {
            config.headers['Authorization'] = "Bearer " + localStorage.getItem("token");
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )
}