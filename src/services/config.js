import axios from 'axios';

export const configure = {
    localHost: location.origin.replace(location.port, ""),
    localAPI: location.origin.replace(location.port, "") + "/api/"
};


export const http = axios.create({
    baseURL: configure.localAPI,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

http.interceptors.request.use(
    function(config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? "Bearer " + token : '';
        return config;
    }
);