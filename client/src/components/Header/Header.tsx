import Logo from "./Logo";
import HeaderOption from "./HeaderOption";
import SearchInputs from "./SearchInputs";
import User from "../User";
import LogInSignUp from "../User/LogInSignUp";

const Header = () => {
  return (
    <>
        <div className="flex flex-col items-center
                pb-5">
            <div className="flex justify-between
                        py-3 px-2 w-full">
                <Logo />
                <div className="flex justify-center items-center gap-1">
                <HeaderOption title="Stays"/>
                <HeaderOption title="Experiences"/>
                <HeaderOption title="Online Experiences"/>
                </div>
                <User />
            </div>
            <SearchInputs />
        </div>
        <div className="border-t border-gray-300" />
        <LogInSignUp />
    </>
    
  )
}

export default Header