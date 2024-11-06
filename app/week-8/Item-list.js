"use client";

import { useState } from "react";
import Item from "./Item";

export default function ItemList({ items }) {
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

  const sortedGroupedItems = Object.keys(groupedItems)
    .sort()
    .reduce((acc, category) => {
      acc[category] = groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {});

  return (
    <div className="flex flex-col bg-black">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-2 ${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 mr-2 ${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 ${sortBy === "group" ? "bg-blue-500" : "bg-gray-500"}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === "group" ? (
        Object.keys(sortedGroupedItems).map((category) => (
          <div key={category} className="capitalize">
            <h2 className="text-white">{category}</h2>
            {sortedGroupedItems[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </div>
        ))
      ) : (
        sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))
      )}
    </div>
  );
}