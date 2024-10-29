"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start bg-black p-4 rounded-lg">
      <label className="text-white mb-2">
        Item Name:
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="ml-2 p-2 border border-gray-300 text-black"
        />
      </label>
      <label className="text-white mb-2">
        Quantity:
        <div className="flex items-center">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`w-12 py-2 rounded ${quantity === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
          >
            -
          </button>
          <input
            type="text"
            className="text-lg font-semibold mb-4 w-10 text-black ml-2 p-2 border border-gray-300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`w-12 py-2 rounded ${quantity === 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            style={{ marginLeft: '0.5rem' }}
          >
            +
          </button>
        </div>
      </label>
      <label className="text-white mb-2">
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="ml-2 p-2 border border-gray-300 text-black"
        >
          <option value="" disabled>Select Category</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="produce">Produce</option>
          <option value="meat">Meat</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
        </select>
      </label>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white mt-4 rounded-lg">
        Add Item
      </button>
    </form>
  );
}