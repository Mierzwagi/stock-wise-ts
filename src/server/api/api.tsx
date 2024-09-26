import axios from "axios";

const baseURL = "https://tcc-senai.onrender.com/api";
const api = axios.create({baseURL});


export default api;
