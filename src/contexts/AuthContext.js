import React, { createContext, useContext, useState } from 'react'
    //createcontext()-> create a box to hold yhe date
    // authcontext is user defined variable that stores in box
    const AuthContext = createContext();

    //AuthProvider = person who fills the box and let others to use 
    export function AuthProvider({children}){
        const [user,setUser]=useState(null);//when no one logged in that is one

        const login =(name) => setUser(name);//if logged in, This put the user name inside the box form the "name"

        //logout clears the user's name when loged out
        const logout = ()=> setUser(null);
        
        return (
            <div>
                <AuthContext.Provider value={{user , login , logout}}>
                    {children}
                </AuthContext.Provider>
                           
            </div>
        )

    }
    export function useAuth(){
        return useContext(AuthContext);
    }