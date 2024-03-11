import axios, { AxiosInstance } from "axios" 

export const useHttp = () => {
  const http: AxiosInstance = axios.create({
    baseURL: "https://ya-praktikum.tech/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  }) 

  return http 
} 
