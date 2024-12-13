import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4">
     <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-10 h-10 flex items-center justify-center p-2 rounded-full shadow-lg border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentPage === index + 1 ? 'bg-black' : 'border border-black'
            }`}
            onClick={() => onPageChange(index + 1)}
          />
        ))}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="w-10 h-10 flex items-center justify-center p-2 rounded-full shadow-lg border-gray-300 hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
