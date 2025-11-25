import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";
import { FiArrowUpRight } from "react-icons/fi";
const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div  >
        <Carousel autoPlay={true} infiniteLoop={true}>
          <div>
            <img src={banner1} alt="banner 1" />
          </div>
          <div>
            <img src={banner2} alt="banner 2" />
          </div>
          <div>
            <img src={banner3} alt="banner 3" />
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-20 lg:bottom-36 lg:left-20 flex gap-3">
        <Link
          to={"/login"}
          className="btn btn-outline outline-primary font-bold hover:bg-primary hover:text-secondary"
        >
          Sing In
        </Link>
        <Link
          to={"/registration"}
          className="btn bg-primary  text-secondary  font-bold"
        >
          Sing Up
        </Link>
        <Link
          to={"/rider"}
          className=" p-2 bg-black rounded-full cursor-pointer"
        >
          <FiArrowUpRight className="text-primary text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
