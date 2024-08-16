import PropTypes from "prop-types";
import { useContext } from "react";
import GlobalModel from "../context/context";

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default function CartItem({ name, quantity, price }) {
  const { onRemoveCompletely } = useContext(GlobalModel);

  return (
    <div className="flex justify-between items-center">
      <div className="flex-1 space-y-1">
        <span className="font-semibold">{name}</span>
        <div className="flex gap-4">
          <span className="font-semibold text-rose-500">{quantity}x</span>
          <span className="font-extralight">@ ${price.toFixed(2)}</span>
          <span className="font-semibold text-rose-500 opacity-50">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <RemoveIcon
        onClick={() => {
          onRemoveCompletely({ name, price });
        }}
      />
    </div>
  );
}

function RemoveIcon({ ...props }) {
  return (
    <div
      {...props}
      className="grid place-content-center rounded-full size-5 border border-black opacity-50 cursor-pointer hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
      >
        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
      </svg>
    </div>
  );
}
