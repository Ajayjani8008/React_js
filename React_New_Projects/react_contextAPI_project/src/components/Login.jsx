import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);


    // Important Note:

    // UserContext.js
    // 🧵 Creates the pipe	React.createContext() — defines the channel, but it's still empty


    // UserContextProvider.jsx
    // 💧 Injects data into the pipe	Uses < UserContext.Provider value = {{ user, setUser }}> to send the data


    // useContext(UserContext)
    // 🚰 Receives data from the pipe	Pulls data from whatever was injected by the provider
    // and  give data to setUser function  

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Login;