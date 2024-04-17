import Header from '../../components/BecomeHost/Header'
import { v4 as uuidv4 } from 'uuid';
import { Outlet } from 'react-router-dom'
import Footer from '../../components/BecomeHost/Footer'
import AddListContext from '../../context/AddListContext'
import { List } from '../../entities/List'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const BecomeAHostLayout = () => {
  const {user} = useContext(UserContext);

  let list:List = {};
  if(!list._id) {
    list._id = uuidv4();
    list.hostId = user?._id;
  };

  return (
    <AddListContext.Provider value={{list}}>
      <div className='w-full h-full'>
          <div className='w-full h-[70px] bg-yellow-100 fixed top-0 left-0'>
              <Header />
          </div>
          <div className='p-5 max-w-[1200px] mx-auto pt-[70px] pb-[90px]'>
              <Outlet />
          </div>
          <div className='w-full h-[90px] bg-yellow-100 fixed bottom-0 left-0'>
            <Footer />
          </div>
      </div>
    </AddListContext.Provider>
  )
}

export default BecomeAHostLayout;