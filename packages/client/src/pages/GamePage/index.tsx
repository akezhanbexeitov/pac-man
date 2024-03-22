import useAuth from '@/hooks/useAuth'
import { ROUTES } from '@/typings'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const GamePage = () => {
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

  return <div>GamePage</div>
}

export default GamePage
