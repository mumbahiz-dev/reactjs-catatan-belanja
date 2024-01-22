import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [groceries, setGroceries] = useState(groceryItems);

  function handleAddItem(item) {
    setGroceries([...groceries, item]);
  }
  function handleDeleteItem(id) {
    setGroceries((groceries) =>
      groceries.filter((grocery) => grocery.id != id)
    );
  }
  function handleToggleItem(id) {
    setGroceries(
      groceries.map((grocery) =>
        grocery.id === id ? { ...grocery, checked: !grocery.checked } : grocery
      )
    );
  }
  function handleClrearItems() {
    setGroceries([]);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={groceries}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClrearItems}
      />
      <Footer items={groceries} />
    </div>
  );
}
