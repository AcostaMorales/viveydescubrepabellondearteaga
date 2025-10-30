import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "") || "";
const timeout = Number(import.meta.env.VITE_TIMEOUT_MS || 15000);

export const http = axios.create({
  baseURL,
  timeout,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

// Interceptores de errores legibles
http.interceptors.response.use(
  (r) => r,
  (err) => {
    const info = {
      url: err?.config?.url,
      method: err?.config?.method,
      status: err?.response?.status,
      data: err?.response?.data,
      message: err?.message,
    };
    // Útil para depurar en dev
    if (import.meta.env.DEV) console.error("API error:", info);
    return Promise.reject(info);
  }
);
