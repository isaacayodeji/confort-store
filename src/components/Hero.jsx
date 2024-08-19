/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const Hero = () => {
  const CarouselImages = [hero1, hero2, hero3, hero4];

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center ">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          {" "}
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quos ea rem fugiat quidem deleniti quod nesciunt, assumenda dicta,
          temporibus culpa blanditiis magnam excepturi, distinctio doloremque
          iste. Voluptatum, ad soluta! Facilis iusto dolorem natus cumque.
          Obcaecati ipsum ducimus, nemo neque illum quas? Aliquam harum, quaerat
          alias aliquid voluptas sed facilis debitis deleniti sapiente amet
          exercitationem repellat quisquam, nemo dignissimos et.
        </p>
        <div className="mt-10">
          {" "}
          <Link to={"/product"} className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {CarouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
