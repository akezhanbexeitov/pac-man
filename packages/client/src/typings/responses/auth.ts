export type UserDTO = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  phone: string
  login: string
  avatar: string
  email: string
}

export type SignupData = Omit<UserDTO, 'avatar' | 'display_name' | 'id'>  & {
  password: string
}

export type SignupResponse = Pick<UserDTO, 'id'>

export type APIError = {
  reason: string
}
