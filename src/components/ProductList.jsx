import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/index";

const ProductList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-13 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image,company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="h-24 w-24 rounded-xl sm:h-32 sm:w-32 object-cover group-hover:scale-105 duration-300 transition"
              />
            </figure>
            <div className="ml-0 sm:ml-16">
              <h4 className="capitalize font-medium text-lg ">{title}</h4>
              <h4 className="capitalize font-medium text-md text-neutral-content ">
                {company}
              </h4>
              <p className="font-medium ml-0 sm:ml-auto text-lg">{dollarsAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductList;
