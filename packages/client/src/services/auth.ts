import { useHttp } from "@/hooks/useHttp"
import { APIError, SignupData, SignupResponse } from "@/typings/responses/auth"

const endpoints = {
  signup: "/auth/signup",
  signin: "/auth/signin",
  me: "/auth/user",
  logout: "/auth/logout",
}

const AuthService = () => {
  const http = useHttp()

  const signup = async (data: SignupData): Promise<SignupResponse | APIError> => {
    const response = await http.post<SignupResponse>(endpoints.signup, data)
    return response.data
  }

  return {
    signup,
  }
}

export default AuthService
