"use client"

import { BiPlus, BiMinus } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image';
import { useCartContext } from '../context/CartContext';

const CartItem = ({pizza}) => {

  const { removeItem,  increaseAmount, decreaseAmount } = useCartContext()
  const {id, image, name, crust, size, price, amount, additionalTopping} = pizza

  return (
    <div className='select-none '>
      <div className='flex gap-x-4 mb-2' >
      {/* image */}
      <div className='flex justify-center items-center'>
      <Image 
        src={image} 
        width={90}
        height={90}
        alt={name}
        />
      </div>
        {/* pizza info */}
        <div className='flex-1 flex flex-col gap-y-1'>
          {/* name */}
          <p className='text-lg capitalize font-bold'>
            {name}</p>
          <div className='flex flex-col gap-y-1'>
            {/* crust */}
            <p className='capitalize font-medium text-[0.9rem] '>
              {crust} crust</p>
            {/* size */}
            <p className='capitalize mb-2 font-medium text-[0.9rem]'>
              {size} size</p>
            {/* quantity controls */}
            <div className='flex items-center gap-x-1'>
              {/*  decrease quantity */}
              <div
              onClick={() => decreaseAmount(id, price)}
              className='w-[1.2rem] h-[1.2rem] flex justify-center items-center cursor-pointer text-white
              rounded-full gradient'>
                <BiMinus />
              </div>
              <div className='font-semibold flex flex-1 max-w-[1.8rem] justify-center items-center text-sm'>
                {amount}</div>
              {/* increase quantity */}
              <div
                onClick={() => increaseAmount(id, price)}
              className='w-[1.2rem] h-[1.2rem] flex justify-center items-center cursor-pointer text-white
              rounded-full gradient'>
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          {/* remove item */}
          <div
          onClick={() => removeItem(id, price, crust)}
          className='text-2xl flex justify-center items-center self-end
          cursor-pointer hove:scale-110 duration-100 transition-all text-orange'>
            <IoCloseOutline />
          </div>
          {/* price */}
          <div>
          <span className='text-[1.1rem] font-medium font-robotoCondensed'>
            ${parseFloat(price * amount).toFixed(2)}
          </span>
          </div>
        </div>
      </div>
      {/* toppings */}
      <div className='flex flex-wrap items-center gap-3 p-6 border-b border-black/10'>
        <p>
          Toppings: {additionalTopping.length === 0 && 'None'}
        </p>
        {
          additionalTopping.map(({name}, i) => (
            <div
            className='capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none'
            key={i}>
              {name}
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default CartItem;
