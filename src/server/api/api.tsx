import axios from "axios";

const baseURL = "https://stockwise-backend.azurewebsites.net/api";
const api = axios.create({baseURL});

//https://tcc-senai.onrender.com/api-docs/#/
export default api;
