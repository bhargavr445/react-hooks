import { createContext, useContext, useState } from "react";

export const UdemyCartContext = createContext({
    cartItems: []
});

export function UdemyContextProvider({ children }) {
    const [cartContextValues, setCartContextValues] = useState({
        cartItems: []
    });
    return <UdemyCartContext.Provider value={{ cartList: cartContextValues, updateCartList: setCartContextValues }}>{children}</UdemyCartContext.Provider>
}

export const useUdemyContext = () => useContext(UdemyCartContext);
