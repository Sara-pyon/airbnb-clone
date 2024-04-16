import { useLocation, useNavigate } from "react-router-dom";

interface Props{
    title: string;
    link: string;
}

const ButtonPrimary = ({title, link}:Props) => {
    const location = useLocation();
    const onSelect = location.pathname === link;
    const style = onSelect ? 
                    "text-base bg-primary text-white px-4 py-1 rounded-full border-none" :
                    "text-base";
    const navigate = useNavigate();
    
  return (
    <button onClick={() => navigate(link)} className={style}>
         {title}
    </button>
  )
}

export default ButtonPrimary