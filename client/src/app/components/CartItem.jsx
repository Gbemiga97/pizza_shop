import { BiPlus, BiMinus } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5';
import Image from 'next/image';

const CartItem = ({pizza}) => {

  const {image, name, crust, size, price, amount} = pizza

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
              <div className='w-[1.2rem] h-[1.2rem] flex justify-center items-center cursor-pointer text-white
              rounded-full gradient'>
                <BiMinus />
              </div>
              <div className='font-semibold flex flex-1 max-w-[1.8rem] justify-center items-center text-sm'>
                1</div>
              {/* increase quantity */}
              <div className='w-[1.2rem] h-[1.2rem] flex justify-center items-center cursor-pointer text-white
              rounded-full gradient'>
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          {/* remove item */}
          <div className='text-2xl flex justify-center items-center self-end
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
      <div>toppings</div>
    </div>
  )
};

export default CartItem;
