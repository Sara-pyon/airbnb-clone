import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import AddListContext from '../../context/AddListContext';

const Footer = () => {
  const location = useLocation();
  const previousPagePath = location?.state?.from;
  const nowPagePath = location.pathname;
  let {list} = useContext(AddListContext);

  return (
    <div className='max-w-[1200px] h-full mx-auto flex items-center justify-between px-10'>
      <div>
        {(nowPagePath === "/account/become-a-host") ?
           " " : <Link to={previousPagePath}>Back</Link>}
      </div>
      <div>
        {(nowPagePath === "/account/become-a-host") ?
         <Link to={`/account/become-a-host/${list._id}/structure`}>
           <button className='primary text-white p-3 rounded-md text-lg'>
            Get started
           </button>
         </Link>
         :
         <button></button>
        }
      </div>
    </div>
  )
}

export default Footer