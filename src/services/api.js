import axios from "axios";

// Crear una instancia de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL de la API definida en .env
  timeout: 5000, // Tiempo máximo de espera
  headers: {
    "Content-Type": "application/json", // Configurar headers globales
  },
});

// Interceptores para manejar tokens de autenticación y errores
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtener token del almacenamiento local
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Añadir token a las cabeceras
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Variable para evitar múltiples intentos de refrescar token a la vez
let isRefreshing = false;
let failedQueue = [];

// Función para procesar la cola de peticiones fallidas cuando se refresca el token
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response) {
      const { status, data } = error.response;

      // Si el estado es 401 y contiene el mensaje específico, redirige al login
      if (
        status === 401 &&
        data.message === "You do not have permission to access this resource"
      ) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // Redirigir al login
        return Promise.reject(error);
      }

      // Manejar caso de refresh token
      if (status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise(function (resolve, reject) {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
              return api(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const userLogin = localStorage.getItem("user-login");
          const parsedLogin = JSON.parse(userLogin);

          const refreshPromise = axios.post(
            `${import.meta.env.VITE_API_URL}/refresh-tokens`,
            { refreshToken: parsedLogin.refreshToken }
          );

          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(
              () => reject(new Error("Refresh token timeout exceeded")),
              3000
            )
          );

          const { data } = await Promise.race([refreshPromise, timeoutPromise]);

          const login = {
            usr_email: parsedLogin.usr_email,
            usr_id: parsedLogin.usr_id,
            access_token: data.accessToken,
            refreshToken: data.newRefreshToken,
            usr_type: parsedLogin.usr_type,
            isCreate: parsedLogin.isCreate || null,
          };

          localStorage.setItem("user-login", JSON.stringify(login));
          localStorage.setItem("token", data.accessToken);
          processQueue(null, data.accessToken);

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
