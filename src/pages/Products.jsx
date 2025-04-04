/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { Filter, PaginationContainer, ProductContainer } from "../components";
import { CustomFetch } from "../utils";
const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);
  const response = await CustomFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
