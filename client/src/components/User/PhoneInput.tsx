import { FormEvent, useRef, useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { IoIosArrowDown } from "react-icons/io";
import countries from '../../data/countriesCode';
import countryCodes, {CountryProperty} from 'country-codes-list'
import Input from '../Input/Input';

interface Props {
    setEmail: boolean
}

const PhoneInput = ({setEmail}:Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const phoneCodeRef = useRef<HTMLInputElement>(null);

    const [chosedCode, setChosedCode] = useState('US');
    const [toggled, setToggled] = useState(false);
    const chosedCountry = countryCodes.findOne('countryCode' as CountryProperty, chosedCode);
    let HTML;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(`{email: ${emailRef.current?.value}}`);
        if(emailRef.current) emailRef.current.value = '';
        if(phoneNumberRef.current) phoneNumberRef.current.value = '';
        if(phoneCodeRef.current) phoneCodeRef.current.value = '';
    }

        HTML = setEmail ? 
        <form className='font-light' onSubmit={handleSubmit}>
            <Input inputType='text' inputTitle='Email' inputRef={emailRef} />
            <button className='primary w-full border rounded-xl
                    p-3 text-white mt-7' type='submit'>
                        Continue
            </button>
        </form> 
        
        :

        <form className='font-light' onSubmit={handleSubmit}>
            <div className=' flex overflow-hidden gap-1 border rounded-lg
                focus-within:border-2 focus-within:border-black'>
                <div className='flex items-center gap-1
                    bg-gray-200 p-3 cursor-pointer'
                    onClick={() => setToggled(!toggled)}>
                    <Icon icon={`flag:${chosedCode.toLocaleLowerCase()}-4x3`} />
                    <p>+{chosedCountry.countryCallingCode}</p>
                    <IoIosArrowDown />
                </div>
                <input className='w-full outline-none'
                    type="text" ref={phoneCodeRef}
                    placeholder={chosedCountry.countryNameLocal} />
                {toggled && <div className='absolute top-10
                bg-gray-100 backdrop-blur w-80 h-96 rounded-md
                overflow-scroll overscroll-auto'>
                {countries.map(c => (
                    <div className=' flex flex-row items-center gap-2
                        hover:bg-gray-200 p-2 cursor-pointer'
                        key={c.code}
                        onClick={() => {
                            setChosedCode(c.code.toUpperCase());
                            setToggled(!toggled)}}>
                        <Icon icon={`flag:${c.code}-4x3`} />
                        <p>{c.title}</p>
                    </div>
                ))}
                </div>}
            </div>
            <Input inputType='phone' inputTitle='Phone' inputRef={phoneNumberRef} />
            <button className='primary w-full border rounded-xl p-3 text-white mt-7'
                    type='submit'
                    >
                        Continue
            </button>
        </form>;

        return(HTML);
}

export default PhoneInput