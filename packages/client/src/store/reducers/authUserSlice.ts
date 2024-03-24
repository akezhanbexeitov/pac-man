import { createSlice } from '@reduxjs/toolkit';

const defaultUser = {
  id: '',
  first_name: '',
  second_name: '',
  display_name: '',
  phone: '',
  login: '',
  avatar: '',
  email: ''
};

const initialState = {
  isAuth: false,
  user: defaultUser,
};

export const authUserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.isAuth = false;
      state.user = defaultUser;
    },
    logIn(state) {
      state.isAuth = true;
    },
    addUserInfo(state, action) {
      state.user = action.payload;
    },
  },
});

export default authUserSlice.reducer;
