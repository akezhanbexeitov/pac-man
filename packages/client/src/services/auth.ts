import { useHttp } from "@/hooks/useHttp"
import { APIError, SigninData, SignupData, SignupResponse, User, UserDTO } from "@/typings"
import { transformUser } from "@/utils/apiTransformers"
import { AxiosError } from "axios"

const endpoints = {
  signup: "/auth/signup",
  signin: "/auth/signin",
  me: "/auth/user",
  logout: "/auth/logout",
}

const AuthService = () => {
  const http = useHttp()

  const signup = async (data: SignupData): Promise<SignupResponse | AxiosError<APIError>> => {
    const response = await http.post<SignupResponse | AxiosError<APIError>>(endpoints.signup, data)
    return response.data
  }

  const signin = async (data: SigninData): Promise<"Ok" | AxiosError<APIError>> => {
    const response = await http.post<"Ok" | AxiosError<APIError>>(endpoints.signin, data)
    return response.data
  }

  const getMe = async (): Promise<User | AxiosError<APIError>> => {
    const response = await http.get<UserDTO | AxiosError<APIError>>(endpoints.me)
    return response.data ? transformUser(response.data as UserDTO) : response.data
  }

  const logout = async (): Promise<"Ok"> => {
    const response = await http.post<"Ok">(endpoints.logout)
    return response.data
  }

  return {
    signup,
    signin,
    getMe,
    logout,
  }
}

export default AuthService
