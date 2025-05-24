import { useMutation } from "@tanstack/react-query";
import { api } from "./api"
import { SignUpFormData } from "@/types/auth";


interface LoginData {
  email: string;
  password: string;
}
const loginfn = async (logindata: LoginData) =>{
  const response = await api.post('/signin', logindata)
  return response.data
}

export const useLogin = () => {
  return useMutation({
    mutationFn: loginfn,
    mutationKey: ['login-user']
  })
}


const registerIndividual = async (individualData: SignUpFormData) =>{
  const response = await api.post('/register-individual',individualData)
  return response.data
}

export const useSignupIndividual = () =>{
  return useMutation({
    mutationFn: registerIndividual,
    mutationKey: ['signup-individual']
  })
}