import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Signup schema
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  dateOfBirth: z.string().refine(value => {
    const date = new Date(value)
    const today = new Date()
    const minimumAge = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate())
    return date <= minimumAge
  }, { message: 'You must be at least 13 years old' }),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say'], {
    errorMap: () => ({ message: 'Please select a gender' })
  })
})

const SignupForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signupSchema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
        <input
          id="signup-name"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('name')}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
        <input
          id="signup-email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          id="signup-password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('password')}
        />
        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="signup-dob" className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
        <input
          id="signup-dob"
          type="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('dateOfBirth')}
        />
        {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
      </div>
      <div>
        <label htmlFor="signup-gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <select
          id="signup-gender"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          {...register('gender')}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
      </div>
      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          className="h-4 w-4 text-brandgreen focus:ring-blue-500 border-gray-300 rounded"
          required
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the <a href="#" className="text-brandgreen hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-brandgreen hover:text-blue-500">Privacy Policy</a>
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandgreen hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign up
        </button>
      </div>
    </form>
  )
}

export default SignupForm