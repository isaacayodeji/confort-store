/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { FeaturedProducts, Hero } from "../components";
import { CustomFetch } from "../utils/index";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await CustomFetch(url);
  const products = response.data.data;
  return { products };
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
