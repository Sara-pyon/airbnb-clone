import LogInSignUp from '../User/LogInSignUp'
import User from '../User/User'
import Logo from './Logo'
import SearchInput from './SearchInput'
import { IoSearch } from 'react-icons/io5'

const SmallHeader = () => {
  return (
    <div className='w-full flex justify-between'>
        <Logo logoOnly={true}/>
        <div className="w-[380px] flex text-sm items-center
            pr-14 pl-5 py-2 justify-between
            hover:shadow-lg cursor-pointer
            border border-gray-300 rounded-full border-1
            shadow-md relative">
            <p className='font-bold'>Anywhere</p>
            <div className="border-l border-gray-300 h-full"/>
            <p className='font-bold'>Any week</p>
            <div className="border-l border-gray-300 h-full"/>
            <p>Add guests</p>
            <button className="primary absolute right-2 top-1 p-2
                    border rounded-full ml-4">
                <IoSearch size={20} color="white"/>
            </button>
        </div>
        <User />
    </div>
  )
}

export default SmallHeader