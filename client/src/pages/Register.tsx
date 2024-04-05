import { FormEvent, useRef } from 'react'
import Input from '../components/Input/Input'
import { Link } from 'react-router-dom';

const Register = () => {
  let first_nameRef = useRef<HTMLInputElement>(null);
  const last_nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password_confirmRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    console.log(first_nameRef.current?.value);
  }

  return (
    <div className='w-full h-full'>
      <form className='w-[400px] h-fit mx-auto my-16 text-center
                    flex flex-col gap-5'
            onSubmit={handleSubmit}>
        <h1 className='text-3xl'>Sign Up</h1>
        <div className='flex flex-col gap-1'>
          <Input inputType='text' inputTitle='first name' inputRef={first_nameRef}/>
          <Input inputType='text' inputTitle='last name' inputRef={last_nameRef}/>
          <Input inputType='text' inputTitle='email' inputRef={emailRef} placeholder='email@'/>
          <Input inputType='password' inputTitle='password' inputRef={passwordRef}/>
          <Input inputType='password' inputTitle='confirm password' inputRef={password_confirmRef}/>
          
        </div>
        <button className='primary text-white p-2 rounded-full' 
            type='submit'>
          Sign Up</button>
        <span>Already a member?  
          <Link to='/login' className='underline underline-offset-1 ml-2'>
            Login</Link>
        </span> 
      </form>
    </div>
  )
}

export default Register