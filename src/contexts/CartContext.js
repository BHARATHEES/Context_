import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([]);
    function addCart(product){
        setCart((prevCart)=>{
            const alreadyInCart = prevCart.some((item) => item.id === product.id);
            if(alreadyInCart) return prevCart;
            return [...prevCart, product];

        }
    );
    }

    function removeFromCart(id){
        setCart((prevCart)=> prevCart.filter(( item ) => item.id !== id));
    }

    return(
        <CartContext.Provider value={{cart, addCart, removeFromCart}} >
            {children}
        </CartContext.Provider>
    );
}
 export function useCart(){
    return useContext(CartContext)
 }