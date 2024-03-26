import Logo from "./Logo";
import NavBarOption from "./NavBarOption";
import SearchInputs from "./SearchInputs";
import User from "./User";

const NavBar = () => {
  return (
    <>
        <div className="flex flex-col items-center
                pb-5">
            <div className="flex justify-between
                        py-3 px-2 w-full">
                <Logo />
                <div className="flex justify-center items-center gap-1">
                <NavBarOption title="Stays"/>
                <NavBarOption title="Experiences"/>
                <NavBarOption title="Online Experiences"/>
                </div>
                <User />
            </div>
            <SearchInputs />
        </div>
        <div className="border-t border-gray-300" />
    </>
    
  )
}

export default NavBar