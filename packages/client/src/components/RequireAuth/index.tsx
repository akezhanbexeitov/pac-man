import { userAuth } from '@/store/selectors/authUser'
import { addUserInfo } from '@/store/slices/authUser'
import { AppDispatch } from '@/store/store'
import { ROUTES } from '@/typings'
import { FC, ReactNode, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const RequireAuth: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const isAuth = useSelector(userAuth)
  const location = useLocation()
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      if (!isAuth) {
        try {
          await dispatch(addUserInfo())
        } catch (error) {
          console.log(error)
        }
      }
      setLoading(false)
    }

    fetchUser()
  }, [])

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
