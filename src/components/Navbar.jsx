/* eslint-disable no-unused-vars */
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/cart/user/userSlice";

// const themes = {
//   winter: "winter",
//   dracula: "dracula",
// };

// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem("theme");
// };
const Navbar = () => {
  // const [theme, setTheme] = useState(getThemeFromLocalStorage());
  // const handleTheme = () => {
  //   const { winter, dracula } = themes;
  //   const newTheme = theme === winter ? dracula : winter;
  //   document.documentElement.setAttribute("data-theme", theme);
  //   setTheme(newTheme);
  // };

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* sun icon*/}
            <BsSunFill className="swap-on h-4 w-4" />
            {/* moon icon*/}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart > 9 ? <h2 className="text-bold">9+</h2> : numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
