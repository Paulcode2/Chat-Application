import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { createContext, useState, useEffect } from "react";
// import { Value } from "sass";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() =>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            // console.log(user)
        });

        return () =>{
            unsub();
        }
    }, []);

    return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
}