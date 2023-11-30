"use client"
// cart context

import { createContext, useContext, useState } from "react"


const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    //cart open state
    const [isOpen, setIsOpen] = useState(false)

    //cart state
    const [cart, setCart] = useState([])

    //add to cart
    const addToCart = (id, image, name, price, additionalTopping, size, crust) => {
        //sort additionalTopping array by name
        additionalTopping.sort((a, b) => a.name.localeCompare(b.name))

        const newItem = {
            id, 
            image, 
            name, 
            price, 
            additionalTopping, 
            size, 
            crust, 
            amount: 1
        }

        setCart([...cart, newItem])
    }

    const contextValue = {
        isOpen,
        setIsOpen,
        addToCart,
        cart
    }


  return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider
