import { useSelector } from 'react-redux'
import { user } from '@/store/selectors/authUserSelectors'

const ProfilePage = () => {
  const userInfo = useSelector(user)
  console.log(userInfo)
  return <div>ProfilePage</div>
}

export default ProfilePage
