import { useMutation } from "@tanstack/react-query";
import { api } from "./api"


interface LoginData {
  email: string;
  password: string;
}
const loginfn = async (logindata: LoginData) =>{
  const response = await api.post('/signin')
  return response.data
}

export const useLogin = () => {
  return useMutation({
    mutationFn: loginfn,
    mutationKey: ['login-user']
  })
}