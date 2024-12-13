import React, { useState } from 'react';
import { useGetProductsQuery } from '../utils/api';
import Pagination from './Pagination';
import { LiaDollarSignSolid } from "react-icons/lia";



const AllProduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;

  const { data, isFetching } = useGetProductsQuery({
    page: currentPage,
    limit: limit
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="space-y-20">
      <div className="title text-center w-1/2 mx-auto ">
        <h2 className="text-4xl font-bold ">All Product</h2>
        <p>The products we provide only for you as our service are selected from the best products with number 1 quality in the world</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.products?.map(product => (
          <div key={product.id} className="p-4">
            <div className='bg-white border-2 p-5 rounded-lg overflow-hidden'>
              <img src={product.image} alt={product.title} className="w-full h-48" />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="inline-block pe-3"><LiaDollarSignSolid className='inline-block' />

                {(product.price_after_discount || product.price).toFixed(2)}</p>
              {product.price_after_discount && (
                <p className="text-gray-500 line-through inline-block"><LiaDollarSignSolid className='inline-block' />

                  {product.price.toFixed(2)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={data?.totalPages || 1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};


export default AllProduct;