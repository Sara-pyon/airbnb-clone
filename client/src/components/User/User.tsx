import { useContext, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import UserContext from '../../UserContext';
import UserMenu from './UserMenu';

const User = () => {
  const [toggled, setToggled] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="relative
                  text-gray-500 flex gap-3 items-center
                  w-fit py-2 px-3
                  border border-gray-300 rounded-full border-1
                  hover:shadow-md cursor-pointer"
                  onClick={() =>setToggled(!toggled)}>
          <IoIosMenu size={25} />
          <div className='flex  items-center gap-1'>
            <FaUserCircle size={30}/>
            {user ? <p className='font-bold'>{user?.first_name}</p> : ''}
          </div>
          {toggled && <div className='
                absolute right-0 top-16 z-10
                border border-0 rounded shadow
                w-48 bg-white py-2
                flex flex-col gap-3
                '>
                {user ? <UserMenu title='My Account' link='/account/me' />
                  :
                <>
                  <UserMenu title='Sign Up' link='/register' />
                  <UserMenu title='Log In' link='/login' />
                </>}

                <div className='border-t border-gray-300'/>
                <UserMenu title='Gift Crads' link='/gift' />
                <UserMenu title='Airbnb your home' link='yourHome' />
                <UserMenu title='Help Center' link='help' />
          </div>}
      </div>
    </>

  )
}

export default User