import { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import PhoneInput from './PhoneInput';
import LoginMethod from './LoginMethod';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { Link} from 'react-router-dom';

const LogInSignUp = () => {
    const[isOpened, setIsOpened] = useState(true);
    const[isEmailfild, setIsEmailFiled] = useState(false);
   return isOpened ? 
   (
    <div className='w-full h-full flex justify-center'>
        <div className='absolute top-0 left-0
        w-full h-full bg-black opacity-20' />
        <div className='absolute top-10
        bg-white w-3/4  z-10
         rounded-lg'>
            <header className='p-5 text-center relative'>
                <div className='absolute top-4 left-3 cursor-pointer' 
                     onClick={() => setIsOpened(false)}>
                    <IoIosClose size={30} />
                </div>
                <p className='text-black opacity-100 font-bold'>
                    Log in or sign up
                </p>
            </header>
            <div className="border-t border-gray-300" />
            <div className='p-7 flex flex-col gap-5'>
                <h1 className='text-2xl font-medium'>
                    Welcome to Airbnb</h1>
                <div className='max-w-mid text-center flex flex-col gap-2'>
                    <PhoneInput setEmail={isEmailfild}/>
                    <div>
                        <span>Don't have an account yet? </span>
                        <Link to={'/register'} className='text-blue-600 visited:text-purple-600'>
                        Sign Up</Link>
                    </div>
                </div>
               <div className='flex flex-row justify-between items-center'>
                    <div className='border-t border-gray-300 w-full'/>
                    <p className='px-2 text-sm font-light'>or</p>
                    <div className='border-t border-gray-300 w-full'/>
               </div>
               <div className='flex flex-col gap-3'>
                    <LoginMethod 
                        title='Continue with Facebook' 
                        icon ={<Icon className="absolute" icon="devicon:facebook" width={25}/>} />
                    <LoginMethod 
                        title='Continue with Google' 
                        icon ={<Icon className="absolute" icon="logos:google-icon" width={25}/>} />
                    <LoginMethod 
                        title='Continue with Apple' 
                        icon ={<Icon className="absolute" icon="bi:apple" width={25}/>} />
                    <LoginMethod 
                        title={isEmailfild ? 'Continue with Phone' : 'Continue with Email'} 
                        icon ={<Icon className="absolute" 
                                    icon={isEmailfild? "mdi:phone" : "material-symbols-light:mail-outline"}
                                        width={26}/>} 
                                handleClick={() => setIsEmailFiled(!isEmailfild)}/>
                    
               </div>
            </div>
        </div>
    </div>
  ) : '';
}

export default LogInSignUp