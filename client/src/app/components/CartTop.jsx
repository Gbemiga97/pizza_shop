"use client"

import {IoCloseOutline} from 'react-icons/io5'
import { useCartContext } from '../context/CartContext';

const CartTop = () => {

  const {setIsOpen} = useCartContext()

  return (
    <div className='w-full h-20 border-b flex items-center justify-between px-10'>

      {/* shopping bag */}
    <p className='font-semibold'>
      Shopping Bag(3)</p>
      {/* close icons */}
      <div 
      className='cursor-pointer group'
      onClick={() => setIsOpen(false)}>
        <IoCloseOutline 
        className='text-3xl group-hover:scale-110 duration-300 transition-all' />
      </div>
    </div>
  )
};

export default CartTop;
