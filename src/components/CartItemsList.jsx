import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItems key={item.cartID} cartItems={item} />;
      })}
    </>
  );
};
export default CartItemsList;
