"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./Item-list";
import itemsData from "./Item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1 style={{ backgroundColor: "black", fontSize: "40px", color: "white" }}>
        Shopping List
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}