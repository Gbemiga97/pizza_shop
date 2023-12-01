"use client"

import Image from "next/image";

import ReactModal from "react-modal";

import { IoCloseOutline } from 'react-icons/io5'

import PizzaDetails from "./PizzaDetails";
import { useState } from "react";

//bind modal to body
ReactModal.setAppElement('body')

//modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
}


const  Pizza = ({pizza}) => {
const { name, image, description, priceSm, } = pizza

const [modal, setModal] = useState(false)

const openModal = () => {
  setModal(true)
}

const closeModal = () => {
  setModal(false)
}


  return (
    <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image 
        onClick={openModal}
      className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
      width={270}
      height={270}
      src={image}
      alt={name}
      priority
      />

      {/* title */}
      <div>
        <h4
        onClick={openModal}
        className='text-xl font-bold mb-3 capitalize cursor-pointer'>
          {name}
        </h4>
      </div>

      {/* description */}
      {/* shows -> (lg) hidden -> (md)  */}
      <p className='hidden lg:flex text-sm font-medium min-h-[60px] mb-6'>
        {description}
      </p>
       {/* shows -> (md) hidden -> (lg)  */}
       <p className='lg:hidden text-sm font-medium min-h-[60px] mb-4'>
        {description.slice(0, 60)}...
      </p>

      {/* price & btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* price hidden in small device and visible in large devices */}
        <h4 className='hidden lg:flex text-xl font-medium'>
          starts at {priceSm}
        </h4>
        {/* btn hidden (sm) - visible (lg) */}
        <button
        onClick={openModal}
        className='hidden lg:flex gradient text-white rounded-lg btn-sm
        font-medium text-sm'>
          Choose
        </button>
        {/* btn -> visible (sm) - hidden -> (lg) */}
        <button 
        onClick={openModal}
        className='btn btn-sm gradient lg:hidden px-3 text-sm'>
          starts at {priceSm}
        </button>
      </div>

      {/* modal */}
      {
        modal && 
        <ReactModal
         isOpen={modal} 
         style={modalStyles}
         onRequestClose={closeModal}
         contentLabel="Pizza Modal"
         className='w-full h-full lg:max-w-[900px] lg:max-h-[600px] bg-white outline-none
         lg:rounded-[1.8rem] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]'
         >
          {/* close modal icon */}
          <div
          onClick={closeModal}
          className='absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer'>
            <IoCloseOutline className='text-4xl text-orange' />
          </div>
          {/* pizza details */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
          </ReactModal>
      }
    </div>
  )
};

export default Pizza;
