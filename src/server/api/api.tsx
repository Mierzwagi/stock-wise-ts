import axios from "axios";

const baseURL = "https://stockwise-backend.azurewebsites.net/api";

const api = axios.create({baseURL});

api.interceptors.request.use(
    (response) => {
        const token = localStorage.getItem('token');
        console.log(token);
        
        if (token) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;
