import React from "react";

const UserContext = React.createContext();

export default UserContext;



// Important Note:

// UserContext.js
// 🧵 Creates the pipe	React.createContext() — defines the channel, but it's still empty


// UserContextProvider.jsx
// 💧 Injects data into the pipe	Uses < UserContext.Provider value = {{ user, setUser }}> to send the data


// useContext(UserContext)
// 🚰 Receives data from the pipe	Pulls data from whatever was injected by the provider