import useAuth from '@/hooks/useAuth'
import { ROUTES } from '@/typings'
import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const RequireAuth: FC<Props> = ({ children }) => {
  const { isAuth, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return null
  }

  if (!isAuth) {
    return (
      <Navigate to={ROUTES.LOGIN} state={{ from: location.pathname }} replace />
    )
  }

  return children
}

export default RequireAuth
