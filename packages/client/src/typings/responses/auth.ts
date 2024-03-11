import { UserDTO } from "../types"

export type SignupData = Omit<UserDTO, 'avatar' | 'display_name' | 'id'>  & {
  password: string
}

export type SignupResponse = Pick<UserDTO, 'id'>

export type SigninData = Pick<UserDTO, 'login'> & {
  password: string
}
