import Header from '../components/Header/Header'
import { Outlet, useLocation} from 'react-router-dom'
import SmallHeader from '../components/Header/SmallHeader';
import { useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { User } from '../entities/User';
import APIClient from '../services/api-client';

const HomeLayout = () => {
  const apiClient = new APIClient<User>('/api/auth');
  const location = useLocation();
  const[user, setUser] =  useState<User | null>(null);

  useEffect(() => {
    if(!user){
      apiClient.get().then(user => setUser(user));
    };
  }, []);
  
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className='w-full'>
        <div className='p-5 max-w-[1200px] mx-auto'>
          {(location.pathname === '/') ? <Header/> : <SmallHeader />}
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  )
}

export default HomeLayout