import { useContext } from "react";
import GlobalModel from "../context/context";
import CartItemWithImage from "../components/CartItemWithImage";

export default function ConfirmOrderView() {
  const { model } = useContext(GlobalModel),
    items = model.items.filter((item) => item.quantity > 0);

  return (
    <div className="confirm-order-view">
      <img width={50} src="./assets/images/icon-order-confirmed.svg" />
      <span className="text-3xl font-bold">Order Confirmed</span>
      <span className="mb-5">We hope you enjoy your food!</span>
      {items.map(({ quantity, name, price }) => (
        <CartItemWithImage key={name} {...{ quantity, name, price }} />
      ))}
      <div className="mt-10 flex justify-between items-center">
        <span className="font-semibold">Order Total</span>
        <span className="text-2xl font-bold">
          $
          {items
            .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 flex px-6 py-3 gap-2 w-full items-center justify-center border-rose-500 border rounded-3xl font-semibold hover:bg-rose-500 hover:text-white"
      >
        Start New Order
      </button>
    </div>
  );
}
