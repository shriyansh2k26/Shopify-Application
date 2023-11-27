import { createContext, useState,children, useContext, useEffect } from "react"

export const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [auth,setauth]=useState({
        email:null,
        token:''
    });
    useEffect(()=>{
    const data=localStorage.getItem('auth')
    if(data){
        const parseData=JSON.parse(data)
        setauth({
            ...auth,
            email:parseData.email,
            token:parseData.token,

        })
    }
    },[])
return(

<AuthContext.Provider value={{auth,setauth}}>{children}</AuthContext.Provider>
)

}

export  default AuthProvider;