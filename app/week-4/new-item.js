"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if(quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
   if(quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex  justify-center mt-4">
    <div className=" bg-white p-2 w-36">
      <input type="text" className=" text-black mr-4 w-10" value={quantity} />
      
    <button 
          onClick={decrement} 
          disabled={quantity === 1} 
          className={` text-white w-8 rounded mx-1 ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
    >
         -
        </button>
        <button 
          onClick={increment} 
          disabled={quantity === 20} 
          className={`w-12  py-2 rounded ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
        >
         +
        </button>
      
    </div>
    </div>
  );
}