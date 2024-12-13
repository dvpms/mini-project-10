import React, { useState } from 'react';
import { useGetTestimonialsQuery } from '../utils/api';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetTestimonialsQuery({ 
    page: currentPage, 
    limit: 1 
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return <div>Loading...</div>;
  if (!data?.testimonials[0]) return <div>No testimonials found.</div>;

  const testimonial = data.testimonials[0];

  return (
    <div className="space-y-20">
      <div className="grid grid-cols-2 gap-14 p-8">
        {/* Left Column - Content */}
        <div className="flex flex-col space-y-10">
          <h1 className="text-4xl font-bold">What people are saying about us</h1>
          
          <div className="flex items-center gap-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </div>

          <p className="text-xl">"{testimonial.message}"</p>

          <div className="flex justify-start items-center space-x-4">
            <button
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              className={`w-10 h-10 flex items-center justify-center p-2 rounded-full shadow-lg transition-colors
                ${currentPage === 1 
                  ? 'bg-white text-black' 
                  : 'bg-[#286F6C] text-white hover:bg-green-600'
                }`}
              disabled={currentPage === 1}
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={() => currentPage < data.totalPages && handlePageChange(currentPage + 1)}
              className={`w-10 h-10 flex items-center justify-center p-2 rounded-full shadow-lg transition-colors
                ${currentPage === data.totalPages 
                  ? 'bg-white text-black' 
                  : 'bg-[#286F6C] text-white hover:bg-green-600'
                }`}
              disabled={currentPage === data.totalPages}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full">
          <img 
            src="https://s3-alpha-sig.figma.com/img/649d/c57e/7e45630bf89f9157ff262817a8c5adcb?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmhNQSYkBzIRi1Py8SVg5QhUGy06FtGy9dKl1yDV997YJHM5kjV7TaYeGMr0pFjagzwFwt7vsc9qsBpelMYaCT51xQW6BC3Dq4uUDbTXiWNkPaIpQ0u1ng29BVjRIBmhrz89Khkbt-es-rdK-RoFWANPmKboJFJAu1wJyxNtIw0ZRm0ssnzLiGqN9LNIQk8jli5wDcX-0Khw54pB1CIkUge49sQnNZo7TKexDrKgeq1BYlSRvWlEEGo1fIWMLIbfxIvcSvHzPyK9RqSpSHPd6KaLKPO5DYsLzWBCSP1LEX1NBbbCtpj7p9X-GL1q8drAHEOxMw~gZWbVU~vGI6Tf5g__" 
            alt="Testimonial" 
            className="w-full h-[340px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
// untuk banner
// https://s3-alpha-sig.figma.com/img/f4d5/d5dc/898fbd88150fd0e8ce8e5a85ec6d8ab2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUHCVwx8ROLqSkq-4QkpwHKA5z868A6PClxmOQ0pvRLpLDttIrt7sPNJgDT8lrdra3QxamHbHVQu8mQWdsnAD4kaoqj2FwPhMN5AooB3dKEzTUZLp3MvR63IoAHSQmtph1~03GxD9gRbsE06v8Qi1pr1So-tVU3bSMUuHzMuFpuUYzR7YDq7BE3H4cMCB0Mon3gOiiCEm-k37dnbDz3RBhjUzMYDybHXFUr51UXe6hf1lYelpR1sPA8Vv51MLpQ4ZmqggYWKpjT4DtDBbkEKABGIpc8Sa6GIL6QRJSx3EKAR~chluNpZ-e~uTcSt-Usgm8y7qqBHCWHdOfLJO7ZNqw__