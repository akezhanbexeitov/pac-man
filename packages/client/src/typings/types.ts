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

export type User = {
  id: number;
  login: string;
  firstName: string;
  secondName: string;
  displayName: string;
  avatar: string;
  phone: string;
  email: string;
};

export enum ROUTES {
  HOME = '/',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  PROFILE = '/profile',
  GAME = '/game',
  LEADERBOARD = '/leaderboard',
  FORUM = '/forum',
  ERROR_500 = '/error500',
}

export type TComment = {
  id: number,
  owner: string,
  date: string,
  description: string,
};

export type TTopic = {
  id: number,
  label: string,
  owner: string,
  date: string,
  description: string,
  comments?: TComment[]
};
