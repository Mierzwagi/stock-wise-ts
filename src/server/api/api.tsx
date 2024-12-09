import axios from "axios";
//import { error } from "console";

const baseURL = "https://stockwise-backend.azurewebsites.net/api";
//const baseURL = "https://tcc-senai.onrender.com/api";
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

//https://tcc-senai.onrender.com/api-docs/#/
export default api;
