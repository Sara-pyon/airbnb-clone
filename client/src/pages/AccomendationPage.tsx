import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'
import { IoIosAdd } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const AccomendationPage = () => {
  return (
    <div className='w-full h-full pt-6 flex justify-center'>
      <Link to={'/account/become-a-host'} target='_blank'>
        <button className='primary rounded-full
           text-white flex items-center gap-1 px-4 py-1'>
            <IoIosAdd size={30}/>
            <p>Add new place</p>
        </button>
      </Link>
      
    </div>
  )
}

export default AccomendationPage