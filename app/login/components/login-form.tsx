"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/service/auth'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

// Login schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})
interface LoginFormInputs {
  email: string;
  password: string;
}
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(loginSchema)
  })
  const {mutate: loginUser, isPending} = useLogin()


  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data)
    loginUser(data, {
      onSuccess: (res) => {
        console.log(res)
      },
      onError: (res) =>{
        console.log('erro here')
        //@ts-ignore
        toast.error(`${res?.response?.data?.message}`);
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
        <input
          id="login-email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          id="login-password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('password')}
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#174023] focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-brandgreen hover:text-blue-500">
            Forgot password?
          </a>
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full flex justify-center py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandgreen hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {
            isPending ?
            <Loader2 className='animate-spin' />
            :
            <p>

              Log in
            </p>
          }
        </button>
      </div>
    </form>
  )
}

export default LoginForm