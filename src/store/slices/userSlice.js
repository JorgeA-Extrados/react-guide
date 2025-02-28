import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    id: '',
    type: '', // Puede ser 'admin', 'user', etc.
  },
  reducers: {
    setUser: (state, action) => {
      const { email, id, type } = action.payload;
      state.email = email;
      state.id = id;
      state.type = type;
    },
    clearUser: (state) => {
      state.email = '';
      state.id = '';
      state.type = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
