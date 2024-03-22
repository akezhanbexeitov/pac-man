import { authUserSlice } from '../reducers/authUserSlice';
import { AppDispatch } from '../store';
import { User, UserDTO } from '@/typings'

export const addUserInfo = (userInfo: User) => async (dispatch: AppDispatch) => {
  await dispatch(authUserSlice.actions.addUserInfo(userInfo));
};

export const logIn = () => async (dispatch: AppDispatch) => {
  await dispatch(authUserSlice.actions.logIn());
};

export const logOut = () => async (dispatch: AppDispatch) => {
  await dispatch(authUserSlice.actions.logOut());
};



