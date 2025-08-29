 
 import { createContext } from "react";
 import { useState } from "react";

export const UserContext = createContext();

 export const ProvideContext = ({children})=>{
      const [userVal, setUserVal] = useState('');

      return(

        <UserContext.Provider value={{userVal,setUserVal}} >
         {children}
        </ UserContext.Provider>
      )
 }