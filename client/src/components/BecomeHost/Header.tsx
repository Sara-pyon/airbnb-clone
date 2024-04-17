import Logo from '../Header/Logo'
import ButtonSecondary from '../ButtonSecondary'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

  return (
    <div className='max-w-[1200px] h-full mx-auto flex items-center justify-between'>
        <Logo logoOnly={true} />
        <ButtonSecondary title='Save & Exit' onClick={() => navigate('/')} />
    </div>
  )
}

export default Header