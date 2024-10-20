import axios from "axios";

const baseURL = "https://tcc-senai.onrender.com/api";
const api = axios.create({baseURL});

//https://tcc-senai.onrender.com/api-docs/#/
export default api;
