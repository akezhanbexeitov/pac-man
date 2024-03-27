import { RootState } from '@/store/store'

export const userData = (state: RootState) => state.auth.user;
export const userAuth = (state: RootState) => state.auth.isAuth;
