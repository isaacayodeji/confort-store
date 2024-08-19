import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./Form";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";


const Filter = () => {
  const {meta,params} = useLoaderData()
  const {search,company,price,category,order,shipping} = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grids-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type={"search"}
        label={"Search product"}
        name={"search"}
        size="input-sm"
        defaultValue={search}
      />
      {/* Categories */}
      <FormSelect
        label="Select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* Companies */}
      <FormSelect
        label="Select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* Orders */}
      <FormSelect
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* Price */}
      <FormRange name={"price"} label={"select range"} size={"rang-sm"} price={price} />
      {/* Shipping */}
      <FormCheckbox name={'shipping'} label={"free shipping"} size={"checkbox-sm"} defaultValue={shipping}/>
      {/* Button */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to={"/products"} className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
};
export default Filter;
