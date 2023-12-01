"use client"

import { BsHandbagFill } from 'react-icons/bs'
import { useCartContext } from '../context/CartContext';


const CartMobileIcon = () => {

  const {setIsOpen, itemAmount} = useCartContext()

  return (
    <div
    onClick={() => setIsOpen(true)}
    className='bg-tertiary w-[72px] h-[72px] rounded-full flex bottom-[5%] lg:hidden
    justify-center items-center text-white cursor-pointer fixed right-[10%] z-20'>
      <BsHandbagFill className='text-4xl' />
      <span className='absolute text-white bottom-3 right-4 gradient w-5 h-5 flex
      justify-center items-center rounded-full font-robotoCondensed text-[13px]'>
        {itemAmount}</span>
    </div>
  )
};

export default CartMobileIcon;
