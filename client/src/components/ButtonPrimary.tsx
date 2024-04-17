import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props{
    children: ReactNode;
    link: string;
    onSelect?: boolean;
}

const ButtonPrimary = ({children, link, onSelect}:Props) => {
    const location = useLocation();
    if(!onSelect) onSelect = location.pathname === link;
    const style = onSelect ? 
                    "text-base bg-primary text-white px-4 py-1 rounded-full border-none" :
                    "text-base";
    const navigate = useNavigate();
    
  return (
    <button onClick={() => navigate(link)} className={style}>
         {children}
    </button>
  )
}

export default ButtonPrimary