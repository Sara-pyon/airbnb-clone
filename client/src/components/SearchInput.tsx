interface Props{
    title: string,
    description: string
}

const SearchInput = ({title, description}: Props) => {
  return (
    <div className="text-left hover:bg-gray-200 
                    hover:rounded-3xl
                    w-full h-full px-5 py-3
                    cursor-pointer">
        <p>{title}</p>
        <p className="font-light opacity-70">{description}</p>
    </div>
  )
}

export default SearchInput