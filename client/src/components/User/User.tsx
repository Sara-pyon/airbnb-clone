import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'

const User = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="relative
                  text-gray-500 flex gap-3 items-center
                  w-fit py-2 px-3
                  border border-gray-300 rounded-full border-1
                  hover:shadow-md cursor-pointer"
                  onClick={() =>setToggled(!toggled)}>
          <IoIosMenu size={25} />
          <FaUserCircle size={30}/>
          {toggled && <div className='
                absolute right-0 top-16 z-10
                border border-0 rounded shadow
                w-48 bg-white py-2
                flex flex-col gap-3
                '>
                <p className=' cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'>
                  Sign up</p>
                <p className=' cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'>
                  Log in</p>
                <div className='border-t border-gray-300'/>
                <p className=' cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'>
                  Gift Cards</p>
                <p className=' cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'>
                  Airbnb your home</p>
                <p className=' cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'>
                  Help Center</p>
          </div>}
      </div>
    </>

  )
}

export default User