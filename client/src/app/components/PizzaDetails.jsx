import Image from "next/image";
import Topping from "./Topping";
import CrustSelection from "./CrustSelection";
import SizeSelection from "./SizeSelection";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";


const PizzaDetails = ({modal, setModal, pizza}) => {

  const {addToCart} = useCartContext()


  const {id, priceSm, priceMd, priceLg, image, name, toppings} = pizza

  //pizza size state
  const [size, setSize] = useState('small')

  //pizza crust state
  const [crust, setCrust] = useState('traditional')

  //addition topping state
  const [additionalTopping, setAdditionalTopping] = useState([])

  //additional topping price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0) 
  
  //price state
  const [price, setPrice] = useState(0)



  //set the price based on the pizza size
  useEffect(() => {
    size === 'small' ? setPrice(parseFloat(priceSm + additionalToppingPrice).toFixed(2)) :
    size === 'medium' ? setPrice(parseFloat(priceMd + additionalToppingPrice).toFixed(2)) :
    size === 'large' ? setPrice(parseFloat(priceLg + additionalToppingPrice).toFixed(2)) : null
  })

  //set additional topping price
  useEffect(() => {
    if(additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price
      }, 0)
      setAdditionalToppingPrice(toppingPrice)
    } else {
      setAdditionalToppingPrice(0)
    }
  }, [additionalTopping])

  return(
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      {/* top */}
      <div className='lg:flex-1 flex justify-center items-center '>
        {/* pizza image */}
        <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0 '>
          <Image
          priority={1}
          width={450}
          height={450}
          src={image}
          alt={name}
          className='mx-auto relative'
          />
        </div>
      </div>
      {/* details */}
      <div className='flex flex-col flex-1'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin
           scrollbar-thumb-gray-200 scrollbar-track-white pr-2'>
            {/* name */}
            <div className='font-semibold'>
              <h2 className='capitalize text-3xl mb-1'>
                {name}</h2>
                {/* size & crust text */}
                <div className='mb-6 text-lg font-medium'>
                  <span>
                    {
                      size === 'small' 
                      ? '25cm' : 
                      size === 'medium'
                      ? '30cm' :
                      size === 'large'
                      ? '35cm' :
                      null
                    }
                  </span> <span>
                    {crust} crust
                  </span>
                </div>
            </div>
            {/* size selection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />

            {/* crust selection */}
            <CrustSelection crust={crust} setCrust={setCrust} />

            {/* toppings */}
            <h4 className="mb-4 text-xl font-semibold">
              Choose toppings</h4>

            {/* topping list */}
            <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
              {
                toppings?.map((topping, i) => (
                  <Topping
                   key={i} 
                   topping={topping} 
                   additionalTopping={additionalTopping}
                   setAdditionalTopping={setAdditionalTopping}
                   />
                ))
              }
            </div>
          </div>
        </div>
         {/* add to cart btn */}
         <div className='h-full flex items-center px-2 lg:items-end'>
          <button
          onClick={() => addToCart(id, image, name, price, additionalTopping, size, crust)}
          className='btn btn-lg gradient w-full flex justify-center gap-x-2'>
            <div>
            Add to cart for
            </div>
            <div>
             $ {price}
            </div>
          </button>
         </div>
      </div>
    </div>
  )
};

export default PizzaDetails;
