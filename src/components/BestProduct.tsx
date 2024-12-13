import React from 'react';

const BestProduct: React.FC = () => {
    const data = {
        imageUrl:
            "https://s3-alpha-sig.figma.com/img/f60b/ac0a/80587cae68f9d90a8b1c2c3387d3f2eb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nven5L4Vt9UsrxlvQLFPrO1X4Y512W~0SjiQztvCRJhKuR~KkysCCp12AR2Csa6ysX8WiiF0Q73Di6IfLsBtbPOUIdbzY9Nr86lEDQVm~w0RsBaKC7ebdm7WHljMiAYDQvG5ke4ylva7oaaMEAf49C5h6o40SUPfPeYKhaOIJq58RZIy1KrLI0D0kODks2ZlgnoRMGGG3K3b3glYrx7CODl0w0xIVISbzSz60sr~fW3rGq5wzMSYo45rQ~r4ZXyb87YwJYX-jlOqJah~4jiVxdhyNFFFT1qd9SJ9FPJiRzT8S6oTcDYyRjlbE8cJNTqHX8Vui1uQt1bXkatK4x6n7A__",
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
          <img src={data.imageUrl} alt="Comfortable Living Room" className="w-full h-[399px] object-cover rounded-lg" />
        </div>

        </div>
      </div>
  );
};

export default BestProduct;
