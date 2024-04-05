import { FaAirbnb } from "react-icons/fa";

interface Props{
  logoOnly?: boolean;
}

const Logo = ({logoOnly = false}:Props) => {
  return (
    <a href="/" className="flex flex-row items-center gap-1 text-primary">
            <FaAirbnb size={40}/>
            {logoOnly ? '' : 
            <span className="font-bold text-xl">
            Airbnb
            </span>
            }
            
    </a>
  )
}

export default Logo