/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { CustomFetch } from "../utils";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { PaginationContainer, SectionTitle } from "../components";
import OrderList from "../components/OrderList";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to view orders");
      return redirect("login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await CustomFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);
      if ((error.response.status === 401) | 403) return redirect("/login");
      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrderList/>
      <PaginationContainer/>
    </>
  );
};
export default Orders;
