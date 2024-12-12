import React from "react";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  const data = {
    imageUrl:
      "https://ik.imagekit.io/lumoshiveAcademy/Furniture/8f82d2c087c3c1808660cf2b4c6dc4a5.webp",
  };
  return (
    <>
      <Navbar />
      <div
        className={`h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center`}
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="flex flex-col justify-center items-center text-white text-center w-1/2 space-y-16">
          <h1 className={"text-5xl font-bold"}>
            Creative Home Simpfy Your Furniture
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            quibusdam earum neque aliquam dicta dolorem reiciendis qui eveniet
            distinctio! Dignissimos?
          </p>
          <button className="px-16 py-4 rounded backdrop-blur-sm bg-white/30 font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="h-screen">
        <div className="flex gap-5 p-40">
          <img
            src="https://picsum.photos/400/300"
            alt=""
          />
          <div className="flex-col">
            <h1>We Create Your Home More Aestetic</h1>
            <p>
              Furniture power is a software as services for multiperpose
              business management system.
            </p>
            <ul>
              <li className="flex">
                <div className="icon"></div>

                <div className="flex">
                  <h2>Valuation Services</h2>
                  <p>
                    Sometimes features require a short description. This can be
                    detailed description
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="icon"></div>

                <div className="flex">
                  <h2>Development of Furniture Modelss</h2>
                  <p>
                    Sometimes features require a short description. This can be
                    detailed description
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
