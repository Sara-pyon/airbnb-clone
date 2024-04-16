import { User } from "./entities/User";
import React from "react";

interface UserContextType{
    user: User | null;
    setUser: (user: User | null) => void;
};

const UserContext = React.createContext<UserContextType>({} as UserContextType);

export default UserContext;