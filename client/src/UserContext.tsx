import { Dispatch,SetStateAction} from "react";
import { User } from "./entities/User";
import React from "react";

interface UserContextType{
    user: User | null;
    setUser: (user: User) => void;
};

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;