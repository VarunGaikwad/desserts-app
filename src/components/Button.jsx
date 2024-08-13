import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import GlobalModel from "../context/context";

Button.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setIsPressed: PropTypes.func.isRequired,
};

export default function Button({ name, price, setIsPressed }) {
  const [isActive, setIsActive] = useState(false),
    [count, setCount] = useState(0),
    {
      model: { items },
      setModel,
    } = useContext(GlobalModel);

  useEffect(() => {
    if (count === 0) {
      setIsActive(false);
    }
    const index = items.findIndex((item) => item.name === name);

    if (count === 0 && index >= 0) {
      items.splice(index, 1);
    } else if (index === -1) {
      items.push({ name, price, quantity: count });
    } else {
      items[index] = { name, price, quantity: count };
    }
    setModel((prev) => ({ ...prev, items }));
  }, [count, setModel, items, name, price]);

  useEffect(() => {
    if (isActive) setCount(1);
    setIsPressed(isActive);
  }, [isActive, setIsPressed]);

  return (
    <button
      onClick={() => setIsActive(true)}
      className={
        "btn item-btn " +
        (isActive
          ? "bg-rose-500 justify-between text-white"
          : "bg-white justify-center")
      }
    >
      {!isActive ? (
        <>
          <img src="./assets/images/icon-add-to-cart.svg" /> Add to Cart
        </>
      ) : (
        <>
          <IconButton onClick={() => setCount(count - 1)}>
            <Decrement />
          </IconButton>
          {count}
          <IconButton onClick={() => setCount(count + 1)}>
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
