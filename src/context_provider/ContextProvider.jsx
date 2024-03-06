import { createContext, useContext, useState } from "react";


const StateContext= createContext({
    currentUser:null,
    token:null,
    setUser:()=>{},
      setToken:()=>{}
})

const ACCESS_TOKEN = "ACCESS_TOKEN";
export const ContextProvider=({children})=>{
const [user,setUser]=useState({})
const [token, _setToken] = useState(localStorage.getItem(ACCESS_TOKEN));

const seToken =(token)=>{
    _setToken(token)
   if(token){
      localStorage.setItem(ACCESS_TOKEN,token)
   }else{
      localStorage.removeItem(ACCESS_TOKEN);

   }
}

return (
  <>
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,_setToken,
      }}
    >{children}</StateContext.Provider>
  </>
);


}

export const useStateContext = () => useContext(StateContext);