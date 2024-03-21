import { useSelector } from 'react-redux'
import { isAuth } from '@/store/selectors/authUserSelectors'

const ProfilePage = () => {
  const userAuth = useSelector(isAuth);
  
  console.log(userAuth)
  return <div>ProfilePage</div>
}

export default ProfilePage
