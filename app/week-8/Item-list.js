"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <ul>
        {sortedItems.map((item, index) => (
          <Item 
            key={index} 
            item={item} 
            onSelect={onItemSelect} 
          />
        ))}
      </ul>
    </div>
  );
}