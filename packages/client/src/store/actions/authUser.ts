import { authUserSlice } from '../reducers/authUserSlice';
import { AppDispatch } from '../store';
import { UserDTO } from '@/typings'

export const addUserInfo = (userInfo: UserDTO) => async (dispatch: AppDispatch) => {
  await dispatch(authUserSlice.actions.addUserInfo(userInfo));
};

export const logIn = () => async (dispatch: AppDispatch) => {
  await dispatch(authUserSlice.actions.logIn());
};



