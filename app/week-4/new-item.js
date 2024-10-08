"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity < 20) {
        return prevQuantity + 1;
      }
      return prevQuantity;
    });
  };

  const decrement = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-lg font-semibold mb-4">Quantity: {quantity}</p>
      <div className="flex space-x-4">
        <button 
          onClick={decrement} 
          disabled={quantity === 1} 
          className={`px-4 py-2 rounded ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
        >
         -
        </button>
        <button 
          onClick={increment} 
          disabled={quantity === 20} 
          className={`px-4 py-2 rounded ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
        >
         +
        </button>
      </div>
    </div>
  );
}