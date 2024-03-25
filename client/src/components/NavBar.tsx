import { FaAirbnb } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <div>
        <a href="#" className="flex flex-row items-center gap-1">
            <FaAirbnb size={40}/>
            <span className="font-bold text-xl">Airbnb</span>
        </a>
        <div className="flex flex-row justify-between 
            text-sm px-6 py-3
            border border-gray-300 rounded-full border-1
            shadow-md">
            <div className="text-left hover:bg-gray-300 w-full px-2">
                <p>Where</p>
                <p className="font-light opacity-70">Search destinations</p>
            </div>
            <div className="border-l border-gray-300" />
            <div className="text-left hover:bg-gray-300 w-full px-2">
                <p>Check in</p>
                <p className="font-light opacity-80">Add dates</p>
            </div>
            <div className="border-l border-gray-300" />
            <div className="text-left hover:bg-gray-300 w-full px-2">
                <p>check out</p>
                <p className="font-light opacity-80">Add dates</p>
            </div>
            <div className="border-l border-gray-300" />
            <div className="text-left hover:bg-gray-300 w-full px-2">
                <p>Who</p>
                <p className="font-light opacity-80">Add guests</p>
            </div>
            <button>
                <IoSearch size={30}/>
            </button>
            
        </div>
    </div>
  )
}

export default NavBar