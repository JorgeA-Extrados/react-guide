import api from "./api";


export const testGet = async () => {
  const response = await api.get(`user/specialization/list`);
  return response;
}

export const testPatch = async (id) => {
  const response = await api.patch(`/user/delete/userSpecialization/${id}`);
  return response;
};

export const testPost = async (user) => {
  const response = await api.post('/user/create/', user);
  return response;
};
