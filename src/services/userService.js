import api from "./api";


export const createUser = async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response;
};

export const login = async (login) => {
    const response = await api.post('/auth/login', login);
    return response;
};

