import axios from "axios";

// En Vite las variables de entorno se leen con import.meta.env
// y deben tener el prefijo VITE_ en tu archivo .env
const API_BACKEND = import.meta.env.VITE_API_BACKEND || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: `${API_BACKEND}/api`,
  withCredentials: true,
});

export default axiosInstance;