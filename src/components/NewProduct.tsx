import React from 'react';
import Slider from 'react-slick';

interface ProductProps {
    name: string;
    image: string;
}



const products: ProductProps[] = [
    { name: 'Modern Chair', image: 'https://picsum.photos/600/600?modern-chair' },
    { name: 'Wooden Table', image: 'https://picsum.photos/600/600?wooden-table' },
    { name: 'Sofa', image: 'https://picsum.photos/600/600?sofa' },
    { name: 'Dining Set', image: 'https://picsum.photos/600/600?dining' },
    { name: 'Bookshelf', image: 'https://picsum.photos/600/600?bookshelf' },
    { name: 'Office Desk', image: 'https://picsum.photos/600/600?desk' },
];


const NewProduct: React.FC = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        swipeToSlide: true,
    };

    return (
        <div className="container mx-auto max-w-none ps-20"> {/* Hapus max width constraint */}
            <div className="flex items-center justify-arround gap-8 h-[500px]">
                {/* Left Column - Text Content */}
                <div className="basis-[30%] space-y-6">
                    <h2 className="text-4xl font-bold">New In <br /> Store Now</h2>
                    <p className="text-gray-600 text-lg">Get the latest items immediately with promo prices</p>
                    <a href="#" className="text-primary hover:text-primary-dark font-medium inline-flex items-center">
                        Check All 
                        <span className="ml-2">→</span>
                    </a>
                </div>
    
                {/* Right Column - Image Slider */}
                <div className="basis-[70%] overflow-hidden"> {/* Ubah overflow menjadi visible */}
                    <Slider {...settings}>
                        {products.map((product, index) => (
                            <div key={index} className="">
                                <div className="relative w-[264px] h-[400px]">
                                    <img 
                                        src={product.image}
                                        alt={product.name} 
                                        className="w-[264px] h-[400px] object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-4 py-2 rounded-md">
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
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
