import { useState } from "react";
import GlobalModel from "./context/context";
import ItemsView from "./views/ItemsView";
import TotalCart from "./views/TotalCart";

export default function App() {
  const [items, setItems] = useState([]),
    onFirstClick = (payload) => setItems((items) => [...items, payload]),
    onIncrement = (payload) =>
      setItems((items) => {
        const index = items.findIndex((item) => item.name === payload.name);
        return [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity + 1 },
          ...items.slice(index + 1),
        ];
      }),
    onDecrement = (payload) =>
      setItems((items) => {
        const index = items.findIndex((item) => item.name === payload.name);
        return [
          ...items.slice(0, index),
          { ...items[index], quantity: items[index].quantity - 1 },
          ...items.slice(index + 1),
        ].filter((item) => item.quantity > 0);
      }),
    onRemoveCompletely = (payload) =>
      setItems((items) => [
        ...items.filter((item) => item.name !== payload.name),
      ]);

  return (
    <div role="main" className="main">
      <GlobalModel.Provider
        value={{
          items,
          onFirstClick,
          onDecrement,
          onIncrement,
          onRemoveCompletely,
        }}
      >
        <ItemsView />
        <TotalCart />
      </GlobalModel.Provider>
    </div>
  );
}
