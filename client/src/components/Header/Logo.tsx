import { FaAirbnb } from "react-icons/fa";

const Logo = () => {
  return (
    <a href="#" className="flex flex-row items-center gap-1 text-primary">
            <FaAirbnb size={40}/>
            <span className="font-bold text-xl">
                Airbnb
            </span>
    </a>
  )
}

export default Logo