import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import PhoneInput from './PhoneInput';

const LogInSignUp = () => {
  return (
    <>
        <div className='absolute top-0 left-0
        w-full h-full bg-black opacity-20' />
        <div className='absolute top-10
        bg-white w-96 z-10
         rounded-lg'>
            <header className='p-5 text-center relative'>
                <div className='absolute top-4 left-3'>
                    <IoIosClose size={30}/>
                </div>
                <p className='text-black opacity-100 font-bold'>
                    Log in or sign up
                </p>
            </header>
            <div className="border-t border-gray-300" />
            <div className='p-10'>
                <h1 className='text-2xl font-medium'>
                    Welcome to Airbnb</h1>
                <form className='max-w-mid'>
                    <PhoneInput />
                </form>
            </div>
        </div>
    </>
  ) 
}

export default LogInSignUp