import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const About: React.FC = () => {
    const data = {
        imageUrl:
            "https://ik.imagekit.io/lumoshiveAcademy/Furniture/8f82d2c087c3c1808660cf2b4c6dc4a5.webp",
    };
    
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-20 p-8">
        {/* Left Column - Image */}
        <div className="w-full">
          <img src={data.imageUrl} alt="Comfortable Living Room" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">We Create Your Home More Aesthetic</h1>
          
          <p className="text-gray-600 text-lg">
            Furnitre power is a software as services for multipurpose business management system.
          </p>

          <div className="space-y-4">
            {/* First List Item */}
            <div className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Valuation Services</h3>
                <p className="text-gray-600">Sometimes features require a short description. This can be detailed description.</p>
              </div>
            </div>

            {/* Second List Item */}
            <div className="flex items-start gap-4">
              <BsCheckCircleFill className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Development of Furniture Models</h3>
                <p className="text-gray-600">Sometimes features require a short description. This can be detailed description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
