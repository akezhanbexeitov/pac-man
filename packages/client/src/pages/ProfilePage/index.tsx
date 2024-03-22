import useAuth from '@/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ROUTES } from '@/typings'

const ProfilePage = () => {
  const isAuth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isAuth) {
      navigate(ROUTES.LOGIN, {
        state: { from: location.pathname },
        replace: true,
      })
    }
  }, [])

  return <div>ProfilePage</div>
}

export default ProfilePage
