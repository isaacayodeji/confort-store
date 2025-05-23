/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItems = ({ cartItems }) => {
  
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, title, price, image, amount, company, productColor } =
    cartItems;

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* Image */}

      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* Info */}
      <div className="sm:ml-16 sm:w-48">
        {/* Title */}
        <h3 className="capitalize text-medium">{title}</h3>
        {/* Company */}
        <h4 className=" capitalize text-sm text-neutral-content mt-2">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color :{" "}
          <span
            className="badge badge-sm"
            style={{ background: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-24">
        {/* Amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* Remove */}
        <button
          className="mt-2 link link-primary link-hover text:sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      {/* Price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItems;
