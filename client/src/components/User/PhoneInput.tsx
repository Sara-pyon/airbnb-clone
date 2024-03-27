import { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { IoIosArrowDown } from "react-icons/io";
import countries from '../../data/countriesCode';
import countryCodes, {CountryProperty} from 'country-codes-list'

const PhoneInput = () => {
    const [chosedCode, setChosedCode] = useState('US');
    const [toggled, setToggled] = useState(false);
    const chosedCountry = countryCodes.findOne('countryCode' as CountryProperty, chosedCode);

    return(
    <div>
        <div>
            <div className='font-light'>
                <div className=' flex overflow-hidden gap-1 border rounded-lg
                    focus-within:border-2 focus-within:border-black'>
                    <div className='flex items-center gap-1
                        bg-gray-200 p-2 cursor-pointer'
                        onClick={() => setToggled(!toggled)}>
                        <Icon icon={`flag:${chosedCode.toLocaleLowerCase()}-4x3`} />
                        <p>+{chosedCountry.countryCallingCode}</p>
                        <IoIosArrowDown />
                    </div>
                    <input className='w-full outline-none'
                        type="text" 
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
                <input className='w-full p-2 border rounded-lg 
                    focus:outline-none focus:border-2 focus:border-black'
                    type="tel" placeholder="Phone number" />
            </div>
        </div>
    </div>)
}

export default PhoneInput