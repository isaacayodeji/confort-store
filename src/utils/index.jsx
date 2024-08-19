/* eslint-disable no-unused-vars */
import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const CustomFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
export const formatPriceNaira = (price) => {
  const nairaAmount = new Intl.NumberFormat("en-NG").format((price / 100).toFixed(2));
  return nairaAmount;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
