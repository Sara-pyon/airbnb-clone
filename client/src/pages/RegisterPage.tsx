import { FormEvent, useRef } from 'react'
import Input from '../components/Input/Input'
import { Link} from 'react-router-dom';
import APIClient from '../services/api-client';
import { User } from '../entities/User';

const Register = () => {
  const first_nameRef = useRef<HTMLInputElement>(null);
  const last_nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password_confirmRef = useRef<HTMLInputElement>(null);
  const apiClient = new APIClient<User>('/api/users');
  
  const registerUser = (event:FormEvent) => {
    event.preventDefault();
    if(first_nameRef.current === null || last_nameRef.current === null || emailRef.current === null || passwordRef.current === null) return;
        apiClient.post({
        first_name: first_nameRef.current.value!,
        last_name: last_nameRef.current.value!,
        email: emailRef.current.value!,
        password: passwordRef.current.value!
      });
  }

  return (
    <div className='w-full h-full'>
      <form className='w-[400px] h-fit mx-auto my-16 text-center
                    flex flex-col gap-5'
            onSubmit={registerUser}>
        <h1 className='text-3xl'>Sign Up</h1>
        <div className='flex flex-col gap-1'>
          <Input inputType='text' inputTitle='first name' inputRef={first_nameRef}/>
          <Input inputType='text' inputTitle='last name' inputRef={last_nameRef}/>
          <Input inputType='text' inputTitle='email' inputRef={emailRef}/>
          <Input inputType='password' inputTitle='password' inputRef={passwordRef}/>
          {/* <Input inputType='password' inputTitle='confirm password' inputRef={password_confirmRef}/> */}
          
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