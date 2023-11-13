import { createContext, useContext, useState } from "react";

export const UserContext = createContext(undefined);

/**
 this is a wrapper we creaded around Context Provider
 */
export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState({
        name: 'Bhargav',
        userEmail: 'bhargavrg445@gmail.com'
    });
    return <UserContext.Provider value={{ userData: user, setUserData: setUser }}>{children}</UserContext.Provider>;
};

/**
 wrapper around useContext, so that we we want to consume or update this we can use the as useContext hook. 
*/
export const useUser = () => useContext(UserContext);
