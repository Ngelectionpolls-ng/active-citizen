"use client"
import React, { useState } from 'react';
import { CheckSquare, Building } from 'lucide-react';
import SignupForm from './components/signup-form';
import RegisterForm from './components/organization-register';
import { cn } from '@/lib/utils';
const Register: React.FC = () => {
  const [registrationType, setRegistrationType] = useState<'individual' | 'organization'>('individual');

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto flex gap-8">
        {/* Form Section */}
        <div className="flex-1">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-gray-600">Create an account to get started with us.</p>
            
            {/* Logo */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#E9F9EF" />
                  <path d="M28 15L20 23L16 19" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 25H12" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-left">
                  <div className="text-green-600 font-bold">Nigeria</div>
                  <div className="text-green-600 font-bold">Election Polls</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration type tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
            <button
              className={cn(
                "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2",
                registrationType === 'individual'
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
              onClick={() => setRegistrationType('individual')}
            >
              <CheckSquare size={18} />
              <span>Individual</span>
            </button>
            <button
              className={cn(
                "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2",
                registrationType === 'organization'
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              )}
              onClick={() => setRegistrationType('organization')}
            >
              <Building size={18} />
              <span>Organization</span>
            </button>
          </div>

          {/* Google sign-up button */}
          <div className="max-w-md mx-auto mb-6">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1711 8.36788H17.5V8.33329H10V11.6666H14.6906C14.0377 13.6063 12.1566 15 10 15C7.23859 15 5.00003 12.7614 5.00003 9.99998C5.00003 7.23856 7.23859 5.00001 10 5.00001C11.2745 5.00001 12.4343 5.48118 13.318 6.26829L15.7054 3.88118C14.1018 2.43176 12.1345 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39764 1.66669 9.99998C1.66669 14.6023 5.39765 18.3333 10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99998C18.3334 9.44293 18.2738 8.89788 18.1711 8.36788Z" fill="#FFC107"/>
                <path d="M2.62744 6.12121L5.36536 8.12935C6.10744 6.29519 7.90099 5.00001 9.99999 5.00001C11.2745 5.00001 12.4343 5.48118 13.318 6.26829L15.7054 3.88118C14.1018 2.43176 12.1344 1.66667 9.99999 1.66667C6.79878 1.66667 4.02235 3.47414 2.62744 6.12121Z" fill="#FF3D00"/>
                <path d="M10 18.3333C12.0836 18.3333 14.0043 17.6014 15.5877 16.2045L12.9523 13.9844C12.0255 14.6623 11.0366 15.0012 10 15C7.85369 15 6.00276 13.6205 5.3435 11.6969L2.5719 13.8356C3.94809 16.5399 6.76063 18.3333 10 18.3333Z" fill="#4CAF50"/>
                <path d="M18.1711 8.36788H17.5V8.33329H10V11.6666H14.6906C14.3801 12.5896 13.7837 13.3899 13.0039 13.9843C13.0039 13.9843 13.0039 13.9842 13.0039 13.9842L15.6394 16.2043C15.4819 16.3461 18.3333 14.1666 18.3333 9.99998C18.3333 9.44293 18.2738 8.89788 18.1711 8.36788Z" fill="#1976D2"/>
              </svg>
              <span>Sign-up with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="max-w-md mx-auto relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">OR</span>
            </div>
          </div>

          {/* Registration Forms */}
          <div className="w-full max-w-4xl mx-auto transition-all duration-300">
            {registrationType === 'individual' ? (
              <div className="animate-fadeIn">
                <SignupForm onSubmit={handleSubmit} />
              </div>
            ) : (
              <div className="animate-fadeIn">
                <RegisterForm />
              </div>
            )}
          </div>
        </div>

        {/* Image Section - Hidden on small screens */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-md">
            <img
              src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg"
              alt="Election illustration"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
              <h3 className="text-white text-xl font-semibold">Make Your Voice Count</h3>
              <p className="text-white/90 mt-2">Join us in shaping the future through transparent and secure election monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;