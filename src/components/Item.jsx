import { useContext, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import GlobalModel from "../context/context";

Item.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default function Item({ image, name, category, price }) {
  const [isPressed, setIsPressed] = useState(false),
    { onFirstClick, onIncrement, onDecrement } = useContext(GlobalModel);

  return (
    <div className="mt-4 flex flex-col">
      <div className="relative">
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <source srcSet={image.mobile} media="(min-width: 480px)" />
          <img
            className={
              "rounded-2xl w-full " +
              (isPressed ? "outline outline-rose-500" : "")
            }
            srcSet={image.mobile}
            alt={name}
          />
        </picture>
        <Button
          firstClick={() => {
            if (!isPressed) {
              onFirstClick({ name, price, quantity: 1 });
              setIsPressed(true);
            }
          }}
          increment={() => {
            onIncrement({ name, price });
          }}
          decrement={() => {
            onDecrement({ name, price });
          }}
          {...{ name, price, isPressed, setIsPressed }}
        />
      </div>
      <span className="mt-8 font-extralight">{category}</span>
      <span className="font-semibold">{name}</span>
      <span className="font-semibold text-rose-500">${price.toFixed(2)}</span>
    </div>
  );
}
