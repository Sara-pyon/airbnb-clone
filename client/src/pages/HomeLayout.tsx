import Header from '../components/Header/Header'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import SmallHeader from '../components/Header/SmallHeader';

const HomeLayout = () => {
  const location = useLocation();
  
  return (
    <div className='w-full'>
      <div className='p-5 max-w-[1200px] mx-auto'>
        {(location.pathname === '/') ? <Header/> : <SmallHeader />}
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default HomeLayout