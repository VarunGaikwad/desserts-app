import { useState } from "react";
import GlobalModel from "./context/context";
import ItemsView from "./views/ItemsView";
import TotalCart from "./views/TotalCart";

export default function App() {
  const [model, setModel] = useState({
    items: [],
  });

  return (
    <div className="main">
      <GlobalModel.Provider value={{ model, setModel }}>
        <ItemsView />
        <TotalCart />
      </GlobalModel.Provider>
    </div>
  );
}
