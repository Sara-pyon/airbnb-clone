import { Outlet } from 'react-router-dom'
import ButtonPrimary from '../components/ButtonPrimary'


const AccountPage = () => {

  return (
    <div className='w-full h-full pt-5'>
      <div className='w-fit mx-auto flex gap-5'> 
        <ButtonPrimary title='My profile' link='/account/me' />
        <ButtonPrimary title='My bookings' link='/account/bookings' />
        <ButtonPrimary title='My accommondations' link='/account/accommondations' />
      </div>
      <Outlet />
    </div>
  )
}

export default AccountPage