import{ FormEvent, useRef } from 'react'
import Input from '../components/Input/Input';
import { Link } from 'react-router-dom';
import LoginMethod from '../components/User/LoginMethod';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    console.log(emailRef.current?.value);
  }

  return (
    <div className='w-full h-full'>
        <div className='w-[400px] h-fit mx-auto my-16
                        flex flex-col gap-3'>
            <form className=' text-center
                        flex flex-col gap-5'
                onSubmit={handleSubmit}>
                <h1 className='text-3xl'>Log In</h1>
                <div className='flex flex-col gap-1'>
                    <Input inputType='text' inputTitle='email' inputRef={emailRef} placeholder='email@'/>
                    <Input inputType='password' inputTitle='password' inputRef={passwordRef}/>
                </div>
                <button className='primary text-white p-2 rounded-full' 
                    type='submit'>
                    Log In</button>
            </form>
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
            </div>
            <div className='text-center'>
                Don't have an account yet?
                <Link to='/register' className='underline underline-offset-1 ml-2'>
                SignUp</Link>
            </div> 
        </div>
    </div>

    

  )
  
}

export default Login