"use client"
import Navbar from '@/components/shared/navbar'
import React, { useState } from 'react'
import { z } from 'zod'
import SignupForm from './components/signup-form'
import LoginForm from './components/login-form'
import Footer from '@/components/shared/footer'
import { useRouter } from 'next/navigation'



const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()
  
  return (
    <main>
      <Navbar />
      <section className='section-container py-12 max-w-lg mx-auto'>
        <div>
           <h1 className='text-2xl font-bold text-brandgreen capitalize mb-6'>
         Log in or sign up
        </h1>
        </div>
        <div className="bg-white rounded-lg mt-12 mb-16 shadow-md p-8">
          {/* Form Selector */}
          <div className="flex mb-6 border-b">
            <button 
              className={`pb-2 px-4 font-medium ${isLogin ? 'border-b-2 border-blue-500 text-brandgreen' : 'text-gray-500'}`}
              onClick={() => setIsLogin(true)}
            >
              Log in
            </button>
            <button 
              className={`pb-2 px-4 font-medium ${!isLogin ? 'border-b-2 border-blue-500 text-brandgreen' : 'text-gray-500'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </button>
          </div>
          {
            isLogin ? 
              <LoginForm onSubmit={(data) => {
                router.push('/feeds')
                console.log(data)
              }} />
              :
              <SignupForm onSubmit={(data) => {
                 router.push('/feeds')
                console.log(data)
              }} />
          }
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default LoginPage