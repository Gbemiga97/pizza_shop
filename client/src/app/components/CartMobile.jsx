"use client"

import { useCartContext } from "../context/CartContext";
import CartBottom from "./CartBottom";
import CartItem from "./CartItem";
import CartTop from "./CartTop";

const CartMobile = () => {

  const { isOpen, cart } = useCartContext()

  return (
    <div className={`${isOpen ? 'bottom-0' : '-bottom-full'} lg:hidden flex flex-col
    bg-white fixed w-full h-full left-0 z-20 transition-all duration-300`}>
      <CartTop />

      {/* cart items */}
      <div className={`${cart.length >= 3 ? 'scrollbar-track-white/10' : 'scrollbar-track-transparent'}
      px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll
      scroll-thin scrollbar-thumb-secondary`}>
        {
          cart?.map((pizza, i) => (
            <CartItem key={i} pizza={pizza} />
          ))
        }
      </div>

      {/* cart bottom */}
      <CartBottom />
    </div>
  )
};

export default CartMobile;
