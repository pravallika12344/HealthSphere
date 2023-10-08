import React, { useState, useEffect } from "react";
export const UserContext = React.createContext()
export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [googleUserData, setGoogleUserData] = useState(null);
    return (
        <UserContext.Provider value={{ userData, setUserData, googleUserData, setGoogleUserData }}>
            {children}
        </UserContext.Provider>
    )
}
