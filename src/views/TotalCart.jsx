import { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import GlobalModel from "../context/context";
import ConfirmOrderView from "./ConfirmOrderView";

export default function TotalCart() {
  const {
      model: { items },
    } = useContext(GlobalModel),
    [showConfirmOrderView, setShowConfirmOrderView] = useState(false);

  return (
    <div className="mt-8 p-4 flex flex-col gap-4">
      <span className="text-2xl font-bold text-rose-500">
        Your Cart (
        {items.length ? items.reduce((acc, curr) => acc + curr.quantity, 0) : 0}
        )
      </span>
      {items.length ? (
        <>
          {items.map((item) => (
            <CartItem key={item.name} {...item} />
          ))}
          <div className="mt-6 flex justify-between">
            <span>Order Total</span>
            <span className="text-2xl font-bold">
              $
              {items
                .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="mt-6 flex items-center mx-auto gap-2">
            <img src="./assets/images/icon-carbon-neutral.svg" />
            <span>
              This is a <span className="font-bold"> carbon-neutral </span>{" "}
              delivery
            </span>
          </div>
          <button
            onClick={() => setShowConfirmOrderView(true)}
            className="mt-4 flex px-6 py-3 gap-2 w-full items-center justify-center border-rose-500 border rounded-3xl font-semibold hover:bg-rose-500 hover:text-white"
          >
            Confirm Order
          </button>
          {showConfirmOrderView && <ConfirmOrderView />}
        </>
      ) : (
        <>
          <img
            className="w-2/3 mx-auto"
            src="./assets/images/illustration-empty-cart.svg"
          />
          <span className="text-center font-semibold text-gray-500">
            Your added items will appear here
          </span>
        </>
      )}
    </div>
  );
}
