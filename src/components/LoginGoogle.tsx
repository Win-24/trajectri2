
"use client";

import { login } from '@/actions/auth'
import { FaGoogle } from 'react-icons/fa'

const LoginGoogle = () => {
  return (
    <div 
        onClick={() => login("google")}
        className='w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-slate-700 rounded-md p-4 flex items-center justify-center'
    >
      <FaGoogle className='w-6 h-6 text-white' />
      <p className='text-white'>Sign in with Google</p>
    </div>
  )
}

export default LoginGoogle
