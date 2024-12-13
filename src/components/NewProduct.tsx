import React from 'react';
import Slider from 'react-slick';
import { useGetCategoriesQuery } from '../utils/api';

const NewProduct: React.FC = () => {
    const { data, isLoading } = useGetCategoriesQuery({});

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    if (isLoading) {
        return (
            <div className="container mx-auto flex justify-center items-center h-[500px]">
                <div className="text-2xl font-semibold">Loading categories...</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-none ps-20">
            <div className="flex items-center justify-around gap-8 h-[500px]">
                <div className="basis-[30%] space-y-6">
                    <h2 className="text-4xl font-bold">New In <br /> Store Now</h2>
                    <p className="text-gray-600 text-lg">Get the latest items immediately with promo prices</p>
                    <a href="#" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                        Check All 
                        <span className="ml-2">→</span>
                    </a>
                </div>
    
                <div className="basis-[70%] overflow-hidden">
                    <Slider {...settings}>
                        {data?.category?.map((category, index) => (
                            <div key={index} className="">
                                <div className="relative w-[264px] h-[400px]">
                                    <img 
                                        src={category.image}
                                        alt={category.title} 
                                        className="w-[264px] h-[400px] object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-4 py-2 rounded-md">
                                        <h3 className="text-lg font-semibold">{category.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
