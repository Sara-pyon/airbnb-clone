import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className='w-full h-full pt-7 text-center'>
      <p>Logged in as {user?.first_name} {user?.last_name} ({user?.email})</p>
      <div className='flex max-w-56 mx-auto pt-5'>
        <button className='primary text-white w-full rounded-full py-2  tracking-wider'
                onClick={() => {
                  setUser(null);
                  navigate('/login');
                  }}>
          Logout</button>
      </div>
    </div>
  )
}

export default ProfilePage