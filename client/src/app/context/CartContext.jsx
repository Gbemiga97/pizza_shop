"use client"
// cart context

import { createContext, useContext, useEffect, useState } from "react"


const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {
    //cart open state
    const [isOpen, setIsOpen] = useState(false)

    //cart state
    const [cart, setCart] = useState([])

    //cart total state
    const [cartTotal, setCartTotal] = useState(0)

    //item Amount
    const [itemAmount, setItemAmount] = useState(0)

    //update item amount

    useEffect(() => {
        const amount = cart.reduce((a, c) => {
          return  a + c.amount;
        }, 0)
        setItemAmount(amount)
    })

    //update total state 
    useEffect(() => {
        const totalPrice = cart.reduce((a, c) => {
          return  a + c.price;
        }, 0)
        setCartTotal(totalPrice)
    })

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

        const cartItemIndex = cart.findIndex((item) => 
        item.id === id &&
        item.price === price &&
        item.size ===  size &&
        //check if the additional array is equal
        JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) &&
        item.crust === crust
        )

        if (cartItemIndex === -1) {
            setCart([...cart, newItem])
        } else {
            const newCart = [...cart]
            newCart[cartItemIndex].amount += 1
            setCart(newCart)
        }


        //open the cart when you add an item to the cart
        setIsOpen(true)
    }

    //remove item from cart
    const removeItem = (id, price, crust) => {
        const itemIndex = cart.findIndex((item) => 
        item.id === id &&
        item.price === price &&
        item.crust === crust
        );
        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart.splice(itemIndex, 1)
            setCart(newCart)
        }
    }

    //increase amount
    const increaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => 
        item.id === id &&
        item.price === price
        )

        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart[itemIndex].amount += 1
            setCart(newCart)
        }
    }

    //decrease amount
    const decreaseAmount = (id, price) => {
        const itemIndex = cart.findIndex((item) => 
        item.id === id &&
        item.price === price
        )

        if (itemIndex !== -1) {
            const newCart = [...cart]
            if(newCart[itemIndex].amount > 1) {
                newCart[itemIndex].amount -= 1
            }
            setCart(newCart)
        }
    }


    const contextValue = {
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        cartTotal
    }


  return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider
