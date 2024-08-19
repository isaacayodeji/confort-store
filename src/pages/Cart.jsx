/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { CartItemsList, CartTotal, SectionTitle } from "../components";
import { Link } from "react-router-dom";
import { payWithXpressPay, PayWithXpressPayConfig } from "xpresspay";
import { formatPriceNaira } from "../utils";

const Cart = () => {
  //temp
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  const orderTotal = useSelector((state) => state.cartState.orderTotal);
  console.log(formatPriceNaira(orderTotal));
  if (numItemsInCart === 0) {
    return <SectionTitle text={"Your Cart is Empty"} />;
  }
  const HandlePayment = () => {
    const config = {
      onSuccess: (response) => {
        console.log("Payment Success:", response);
      },
      onError: (error) => {
        console.log("Payment Error:", error);
      },
      //   authorizationUrl: "https://test.xpresspayments.com:8030/ZdcaWPQTG7fobfB",
      amount: formatPriceNaira(orderTotal).replace(",", ""),
      transactionId: Math.floor(Math.random() * 1000000).toString(),
      email: user.email,
      public_key: "XPPUBK-c1401fa8ca844d0aa16105dbeb2426b3-X",
      currency: "NGN",
      //   productId: "1001",
      //   applyConviniencyCharge: true,
      //   isRecurring: false,
      DISPLAY_MODE: "POPUP",
      ENV_MODE: "LIVE",
      //   productDescription: "MTN",
      //   bodyColor: "#000000",
      //   buttonColor: "#000000",
      //   footerText: "Powered by Test Ltd",
      //   footerLink: "http://test.com",
      //   footerLogo: "http://test.com/test.png",
      //   metadata: [
      //     {
      //       name: "sample",
      //       value: "test",
      //     },
      //   ],
    };

    payWithXpressPay(config);
  };
  return (
    <>
      <SectionTitle text={"Shopping Cart "} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link
              onClick={HandlePayment}
              // to={"/checkout"}
              className="btn btn-primary btn-block mt-8"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link to={"/login"} className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
