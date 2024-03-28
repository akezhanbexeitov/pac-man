import { userAuth } from "@/store/selectors/authUser"
import { addUserInfo } from "@/store/slices/authUser"
import { AppDispatch } from "@/store/store"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(true)

  const isAuth = useSelector(userAuth)
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
  }, [isAuth])  

  return {
    isAuth,
    loading
  }
}

export default useAuth