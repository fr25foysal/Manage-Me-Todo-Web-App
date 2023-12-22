import { useContext } from "react";
import { contextProvider } from "../provider/authProvider";

const useProvider = () => {
    
    return useContext(contextProvider)
};

export default useProvider;