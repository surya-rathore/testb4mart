import axios from "axios";
const Axios = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
    ? `https://seashell-app-evjm9.ondigitalocean.app/api` 
    : `http://localhost:4000/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default Axios;
