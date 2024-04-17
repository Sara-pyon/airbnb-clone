import { Outlet } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'


const AccountPage = () => {
  

  return (
    <div className='w-full h-full pt-5'>
      <div className='w-fit mx-auto flex gap-5'> 
        <ButtonPrimary children='My profile' link='/account/me' />
        <ButtonPrimary children='My bookings' link='/account/bookings' />
        <ButtonPrimary children='My accommondations' link='/account/mylists' />
      </div>
      <Outlet />
    </div>
  )
}

export default AccountPage