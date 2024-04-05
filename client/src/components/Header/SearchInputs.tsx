import SearchInput from './SearchInput'
import { IoSearch } from 'react-icons/io5'

const SearchInputs = () => {
  return (
    <div className="flex flex-row justify-between 
            text-sm
            border border-gray-300 rounded-full border-1
            shadow-md relative
            max-w-4xl w-full">
            <SearchInput title='Where' description="Search destination" />
            <div className="border-l border-gray-300 my-3" />
            <SearchInput title="Check in" description="Add dates"/>
            <div className="border-l border-gray-300 my-3" />
            <SearchInput title="check out" description="Add dates" />
            <div className="border-l border-gray-300 my-3" />
            <SearchInput title="Who" description="Add guests" />
            <button className="primary absolute right-2 top-1 p-4 
                    border rounded-full ">
                <IoSearch size={20} color="white"/>
            </button>
        </div>
  )
}

export default SearchInputs