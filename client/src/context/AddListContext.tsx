import React from "react";
import { List } from "../entities/List";

interface addListContextType{
    list: List;
};

const AddListContext = React.createContext<addListContextType>({} as addListContextType);

export default AddListContext;