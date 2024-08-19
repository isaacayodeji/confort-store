/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import {
  formatPrice,
  CustomFetch,
  generateAmountOptions,
} from "../utils/index";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await CustomFetch(`products/${params.id}`);
  return { product: response.data.data };
};
const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className=".text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>product</Link>
          </li>
        </ul>
      </div>
      {/* Products */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-98 h-98 object-cover rounded-lg lg:w-full"
        />
        {/* Products */}
        <div>
          <h1 className="capitalize text-3xl font-bold ">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div>
            {/* Colors */}
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                color
              </h4>
              <div className="mt-2">
                {colors.map((color) => {
                  return (
                    <button
                      type="button"
                      key={color}
                      className={`badge w-6 mr-2 h-6 ${
                        color === productColor && "border-2 border-secondary"
                      }`}
                      style={{ background: color }}
                      onClick={() => setProductColor(color)}
                    ></button>
                  );
                })}
              </div>
            </div>
            {/* Amount */}
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  Amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {/* <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option> */}
                {generateAmountOptions(20)}
              </select>
            </div>
            {/* Cart */}
            <div className="mt-10">
              <button className="btn btn-secondary btn-md" onClick={addToCart}>
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
