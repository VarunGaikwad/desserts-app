import PropTypes from "prop-types";
import data from "../data/data.json";

CartItemWithImage.propTypes = {
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default function CartItemWithImage({ quantity, name, price }) {
  const { thumbnail } = data.find((item) => item.name === name).image;

  return (
    <div className="flex gap-4 items-center">
      <img width={70} className="rounded-2xl" src={thumbnail} />
      <div className="flex-1 space-y-1">
        <span className="font-semibold">{name}</span>
        <div className="flex gap-4">
          <span className="font-semibold text-rose-500">{quantity}x</span>
          <span className="font-extralight">@ ${price.toFixed(2)}</span>
        </div>
      </div>
      <span className="font-bold">${(price * quantity).toFixed(2)}</span>
    </div>
  );
}
