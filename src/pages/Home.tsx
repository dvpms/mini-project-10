import React from "react";
import { useGetHeaderQuery } from "../utils/api";
import Navbar from "../components/Navbar";
import About from "../components/About";
import NewProduct from "../components/NewProduct";
import BestProduct from "../components/BestProduct";
import AllProduct from "../components/AllProduct";
import Testimonials from "../components/Testimonials";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import StatisticBox from "../components/StatistixBox";

const Home: React.FC = () => {
  const { data, isLoading } = useGetHeaderQuery({});

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <>
      <div className="w-full">
        <Navbar />
        <div
          className="hero h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center relative"
          style={{ backgroundImage: `url(${data?.banner})` }}
        >
          <div className="flex flex-col justify-center items-center text-white text-center w-1/2 space-y-16">
            <h1 className="text-5xl font-bold">
              {data?.title}
            </h1>
            <p className="px-16 text-base">
              {data?.description}
            </p>
            <button className="px-16 py-4 rounded backdrop-blur-sm bg-white/30 font-semibold">
              Shop Now
            </button>
          </div>
          <StatisticBox />
        </div>
        <div className="p-14 mt-20">
          <About />
        </div>
        <NewProduct />
        <div className="p-14">
          <BestProduct />
        </div>
        <div className="p-14">
          <AllProduct />
        </div>
        <div className="p-14">
          <Testimonials />
        </div>
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
