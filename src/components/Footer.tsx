import React from 'react';
import {
    FacebookIcon,
    TwitterIcon,
} from 'react-share';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
 const Footer: React.FC = () => {
    return (
        <footer className="bg-[#23262F] text-white py-12">
            {/* Container Utama */}
            <div className="max-w-screen-xl mx-auto px-6">
                {/* Bagian Header */}
                <div className="flex justify-between items-center mb-8">
                    {/* Nama Brand */}
                    <h1 className="text-2xl font-bold">FurniShop</h1>

                    {/* Ikon Media Sosial */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FacebookIcon size={32} round={true} className="rounded-full" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <TwitterIcon size={32} round={true} className="rounded-full" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaGithub size={32} className="rounded-full" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaInstagram size={32} className="rounded-full" />
                        </a>
                    </div>                </div>

                {/* Garis Horizontal */}
                <hr className="border-gray-600 mb-8" />

                {/* Kolom Informasi */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
                    {/* Kolom 1 */}
                    <div>
                        <h2 className="font-semibold mb-4">Our Products</h2>
                        <ul className="space-y-2">
                            <li>The Support Suite</li>
                            <li>The Sales Suite</li>
                            <li>Support</li>
                            <li>Guide</li>
                        </ul>
                    </div>

                    {/* Kolom 2 */}
                    <div>
                        <h2 className="font-semibold mb-4">Top Features</h2>
                        <ul className="space-y-2">
                            <li>Ticketing System</li>
                            <li>Knowledge Base</li>
                            <li>Community Forums</li>
                            <li>Help Desk Software</li>
                        </ul>
                    </div>

                    {/* Kolom 3 */}
                    <div>
                        <h2 className="font-semibold mb-4">Resources</h2>
                        <ul className="space-y-2">
                            <li>Product Support</li>
                            <li>Request Demo</li>
                            <li>Library</li>
                            <li>Peoplepower Blog</li>
                        </ul>
                    </div>

                    {/* Kolom 4 */}
                    <div>
                        <h2 className="font-semibold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Investors</li>
                            <li>Events</li>
                        </ul>
                    </div>

                    {/* Kolom 5 */}
                    <div>
                        <h2 className="font-semibold mb-4">Favourite Things</h2>
                        <ul className="space-y-2">
                            <li>For Enterprise</li>
                            <li>For Startups</li>
                            <li>For Benchmark</li>
                            <li>For Small Business</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-12 text-gray-400 text-sm">
                    © NameBrand 2022 - All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
export default Footer;