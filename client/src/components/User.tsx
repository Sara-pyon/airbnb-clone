import { FaUserCircle } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'

const User = () => {
  return (
    <div className="text-gray-500 flex gap-3 items-center
                w-fit py-2 px-3
                border border-gray-300 rounded-full border-1
                hover:shadow-md cursor-pointer">
        <IoIosMenu size={25} />
        <FaUserCircle size={30}/>
    </div>
  )
}

export default User