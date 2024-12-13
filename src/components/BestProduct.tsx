import React from 'react';

const BestProduct: React.FC = () => {
    const data = {
        imageUrl:
            "https://ik.imagekit.io/lumoshiveAcademy/Furniture/8f82d2c087c3c1808660cf2b4c6dc4a5.webp",
    };
    
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-20 p-8">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">The Best Furniture Manufacturer of your choice</h1>
          
          <p className="text-xl">
          Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services          </p>
          </div>
          {/* Right Column - Image */}
          <div className="w-full">
          <img src={data.imageUrl} alt="Comfortable Living Room" className="w-full h-full object-cover rounded-lg" />
        </div>

        </div>
      </div>
  );
};

export default BestProduct;
