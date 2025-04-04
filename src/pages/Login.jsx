/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { CustomFetch } from "../utils/index";
import { toast } from "react-toastify";
import { loginUser } from "../features/cart/user/userslice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    console.log(store);
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await CustomFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";

      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginGuestUser = async () => {
    try {
      const response = await CustomFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest User");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user error, please try again");
    }
  };
  return (
    <section className="h-screen grid place-content-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          // defaultValue={"jimmy1@gmail.com"}
        />
        <FormInput
          type={"password"}
          name={"password"}
          label={"password"}
          // defaultValue={"password"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <button
          onClick={loginGuestUser}
          className="btn btn-secondary btn-block"
          type="button"
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to={"/register"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
