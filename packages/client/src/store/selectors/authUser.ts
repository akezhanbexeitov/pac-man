import { RootState } from '@/store/store'

export const isAuth = (state: RootState) => state.auth.isAuth;
export const user = (state: RootState) => state.auth.user;

