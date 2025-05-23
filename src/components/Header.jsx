import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/cart/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);
  const handleLogout = () => {
    navigate("/");
    dispatch(logoutUser());
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm ">Hello, {user.username}</p>
            <button
              onClick={handleLogout}
              className="btn btn-xs btn-outline btn-primary"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-6 justify-center">
            <Link to="login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="register" className="link link-hover text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
        {/* User */}
        {/* LINKS */}
      </div>
    </header>
  );
};
export default Header;
