interface Props{
  title: string
}
const HeaderOption  = ({title}:Props) => {
  return (
    <div>
      <p className="font-light opacity-70
      px-5 py-2 
      cursor-pointer 
      border rounded-full border-0
      hover:bg-gray-200 
      ">
        {title}</p>
    </div>
  )
}

export default HeaderOption