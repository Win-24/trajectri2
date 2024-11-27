
import LoginForm from '@/components/LoginForm'
import LoginGoogle from '@/components/LoginGoogle'
import React from 'react'

const SignIn = () => {
  return (
    <div className='w-full flex mt-20 justify-center'>
      <section className='flex flex-col w-[400px]'>
        <h1 className='text-3xl w-full text-center font-bold mb-6'>Sign In</h1>

        <LoginForm />

        <LoginGoogle />
      </section>
    </div>
  )
}

export default SignIn