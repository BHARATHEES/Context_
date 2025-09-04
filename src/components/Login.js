import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext';
import Shop from './Shop';

export default function Login() {



    const {user, login, logout} = useAuth();
    const {theme, toggleTheme}=useTheme();

    //local state variable to capture the user name
    const [name, setName]=useState("");

    if(user){
        return(
        <div style={{backgroundColor: theme=== "light"? "#fff": "#222",
            minHeight:'100vh',
            color:theme==="light"?"#222":"#fff",
            padding:"20px",}}>
            <h2> Hi . {user} !</h2>
            <button onClick={logout}> logout</button>
            <button onClick={toggleTheme} >toggleTheme</button>
            <Shop/>
        </div>
        )
    }
    return(
        <div style={{backgroundColor: theme=== "light"? "#fff": "#222",
            minHeight:'100vh',
            color:theme==="light"?"#222":"#fff",
            padding:"20px"}}>
            <input type='text' placeholder='Enter you name' value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={()=> login(name)}>Login</button>
            <button onClick={toggleTheme} >toggleTheme</button>
        </div>
    )
}

