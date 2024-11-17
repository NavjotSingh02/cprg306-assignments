"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./Item-list";
import itemsData from "./Item.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedItem = item.name.split(',')[0].trim().replace(/[^a-zA-Z ]/g, "");
    setSelectedItemName(cleanedItem);
  };

  return (
    <main>
      <h1 style={{ backgroundColor: "black", fontSize: "40px", color: "white" }}>
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}