import { isAuth } from "@/store/selectors/authUserSelectors"
import { useSelector } from "react-redux"

const useAuth = () => {
  return useSelector(isAuth)
}

export default useAuth
