import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const About: React.FC = () => {
    const data = {
        imageUrl:
            "https://s3-alpha-sig.figma.com/img/29fc/b6ee/c1a6b8bfe25ce205553cb2aad2c02d09?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ihOXuaxV9WXRRZdgebijjpC420cMixx4bxgLnUoV8yg2Wu6HcDmASKNmO4Z-mmGBsaxjQEmzBLZdRz-e6DOM2EJ7B~TiypfiJItGo690f4DqyVkzFu843ij3ElOVclFLg~-Pg5thVoJDkfb-4pJlMY~9dVipmj5K8IzLKBn4u5pCC90~N20CYX3OvTxVeO2BWS7qi7HejNQnIbb0VvB7ybvfBKTEDmAkpQcn-pc4vCyi-PxxaKpedPP4iRpdc~955xjSmWECTHlgB6DLOeMho0ZkC8B8L7hgPU~uGVp0aV9BDdSRmYIwId9dByL99wiwaSF1NmO1iIt9hITVVBAybw__",
    };
    
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-20 p-8">
        {/* Left Column - Image */}
        <div className="w-full">
          <img src={data.imageUrl} alt="Comfortable Living Room" className="w-full h-[443px] object-cover rounded-lg" />
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
