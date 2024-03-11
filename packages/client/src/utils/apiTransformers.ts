import { User, UserDTO } from "@/typings";

export const transformUser = (data: UserDTO): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name ? data.display_name : data.login,
    avatar: data.avatar,
    phone: data.phone,
    email: data.email,
  };
};
