import PropTypes from "prop-types";
import { useContext } from "react";
import GlobalModel from "../context/context";

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isPressed: PropTypes.bool.isRequired,
  firstClick: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  setIsPressed: PropTypes.func.isRequired,
};

export default function Button({
  name,
  isPressed,
  firstClick,
  increment,
  decrement,
  setIsPressed,
}) {
  const { items } = useContext(GlobalModel),
    count = items.find((item) => item.name === name)?.quantity || 0;

  if (count === 0) setIsPressed(false);
  return (
    <button
      onClick={firstClick}
      className={
        "btn item-btn " +
        (isPressed
          ? "bg-rose-500 justify-between text-white"
          : "bg-white justify-center")
      }
    >
      {!isPressed ? (
        <>
          -rose-500 role="img" alt="Add to cart"
          src="./assets/images/icon-add-to-cart.svg" /> Add to Cart
        </>
      ) : (
        <>
          <IconButton onClick={decrement}>
            <Decrement />
          </IconButton>
          {count}
          <IconButton onClick={increment}>
            <Increment />
          </IconButton>
        </>
      )}
    </button>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
};

function IconButton({ children, ...props }) {
  return (
    <span {...props} className="icon-btn">
      {children}
    </span>
  );
}

function Increment() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
    >
      <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
    </svg>
  );
}

function Decrement() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      viewBox="0 0 10 2"
    >
      <path d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
}
