/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-center font-semibold text-primary text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry we couldn't find the page you are looking for.{" "}
          </p>
          <div className="mt-10">
            <Link to={""} className="btn btn-secondary">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">There was an error </h4>
    </main>
  );
};
export default Error;
