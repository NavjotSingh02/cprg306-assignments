"use client";
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
    setQuantity(1);
  };

  const newItems = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 20) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Item Name"
            required 
          />
        </div>
        <div>
          <div>
            <div>
              <span>{quantity}</span>
              <div>
                <button 
                  type="button" 
                  onClick={() => newItems(quantity - 1)} 
                  disabled={quantity === 1}
                >
                  -
                </button>
                <button 
                  type="button" 
                  onClick={() => newItems(quantity + 1)} 
                  disabled={quantity === 20}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>Category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button 
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}