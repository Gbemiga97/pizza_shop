import Image from "next/image";
import { useEffect, useState } from "react";
import {IoMdCheckmark} from 'react-icons/io'


const Topping = ({topping, additionalTopping, setAdditionalTopping}) => {
  
  //destructure topping
  const {image, name} = topping 

  //checkbox state
  const [isChecked, setIsChecked] = useState(false)

  //handle checkbox
  const handleCheckBox = () => {
    setIsChecked(prev => !prev)
  }

  //handle topping 
  const handleTopping = () => {
    if(isChecked) {
      //use set to ensure unique values
      const newToppings = new Set([...additionalTopping, { ...topping }])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      //remove the topping with the matching name
      const newToppings = additionalTopping.filter(toppingObj => toppingObj.name !== name)
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isChecked])

  return (
    <div className={`${isChecked && 'border-orange'} border rounded-md bg-white relative
    w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center`}>
      <Image
      src={image}
      width={70}
      height={70}
      alt={name}
      className="mb-2"
      />
      {/* topping name */}
      <p className="text-sm capitalize text-center font-medium ">
        {name}
      </p>
      <input 
      type="checkbox"
      checked={isChecked}
      className="absolute w-full h-full opacity-0 cursor-pointer"
       onChange={handleCheckBox}
       />
       {/* checkmark icon */}
       <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`} >
        <IoMdCheckmark className="text-xl text-orange"/>
       </div>
    </div>
  )
};

export default Topping;
