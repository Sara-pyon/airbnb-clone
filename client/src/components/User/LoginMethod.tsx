import { ReactNode } from 'react'

interface Props{
    title: string,
    icon: ReactNode,
    handleClick?: () => void
}

const LoginMethod = ({title, icon, handleClick}:Props) => {
  return (
    <>
    <div className='border rounded-md border-1 border-black p-3
                    hover:bg-gray-200 cursor-pointer' onClick={handleClick}>
        {icon}
        <p className='w-full text-center'>
            {title}</p>
    </div>
    </>
  )
}

export default LoginMethod