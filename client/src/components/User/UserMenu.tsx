import { useNavigate } from 'react-router-dom';

interface Props{
    title: string;
    link: string;
}

const UserMenu = ({title, link}: Props) => {
    const navigate = useNavigate();
  return (
    <p className='cursor-pointer border border-0 hover:rounded-sm hover:bg-gray-200 p-2'
        onClick={() => navigate(link)}>
    {title}</p>
  )
}

export default UserMenu