import React from 'react'

const EmailInput = () => {
  return (
    <input className='w-full p-2 border rounded-lg 
                    focus:outline-none focus:border-2 focus:border-black'
                    type="mail" placeholder="Email" />
  )
}

export default EmailInput