/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux";
import { CartTotal, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) =>()=> {
  const user = store.getState().userState.user
  if(!user){
    toast.warn("You must be logged in to checkout")
    return redirect('/login')
  }
  return null

}
const Checkout = () => {

  const cartItems = useSelector((state) => state.cartState.cartTotal);
  if (cartItems === 0) {
    return <SectionTitle text={"Your cart is empty"} />;
  }
  return (
    <>
      <SectionTitle text={"place your order"} />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  );
};
export default Checkout;
