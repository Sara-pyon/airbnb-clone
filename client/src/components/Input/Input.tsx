import React, { useRef } from 'react'
import styles from './Input.module.css'

interface Props{
  inputType: string,
  inputTitle: string,
  inputRef: React.RefObject<HTMLInputElement>,
  placeholder?: string
}

const Input = ({inputType,inputTitle,inputRef, placeholder}:Props) => {

  return (
    <div className={styles.inputBox}> 
       <input type={inputType} required ref={inputRef}/> 
       <span>{inputTitle}</span>
    </div>
  )
}

export default Input