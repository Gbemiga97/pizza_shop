"use client"

import { useCartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";
import CartTop from "./CartTop";




const CartDesktop = () => {

  const {isOpen, cart} = useCartContext()

  return (
    <div className={`${isOpen ? 'left-0' : '-left-full'} bg-white fixed duration-300
    top-0 bottom-0 w-[500px]  shadow-2xl hidden lg:flex flex-col transition-all `}>
      {/* cart top */}
      <CartTop />
      <div className={`${cart.length >= 3 && 'scrollbar-track-black/10 scrollbar-thumb-secondary'}
      px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-thin`}>
        {
          cart?.map((pizza, i) => (
            <CartItem pizza={pizza} key={i} />
          ))
        }
      </div>
      {/* cart bottom */}
      <CartBottom />
    </div>
  )
};

export default CartDesktop;
