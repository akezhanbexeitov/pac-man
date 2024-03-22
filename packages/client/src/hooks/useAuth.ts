import AuthService from '@/services/auth';
import { addUserInfo, logIn } from '@/store/actions/authUser';
import { isAuth } from '@/store/selectors/authUserSelectors';
import { AppDispatch } from '@/store/store';
import { User } from '@/typings';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useAuth = () => {
  const userAuth = useSelector(isAuth);
  const dispatch: AppDispatch = useDispatch();
  const { getMe } = AuthService()

  useEffect(() => {
    const authUser = async () => { 
      if (!userAuth) {
        try {
          const user = await getMe()
          dispatch(addUserInfo(user as User))
          dispatch(logIn())
        } catch (error) {
          console.log(error)
        }
      }
    }

    authUser()
  }, [])

  return userAuth
}

export default useAuth
