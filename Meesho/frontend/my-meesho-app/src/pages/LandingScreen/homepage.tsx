import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { IoMan } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";




const LandingPage = () => {
    return (
        <div>
            <div className="bg-white mt-5 px-36">
                <div className="flex items-center justify-between">
                    <div className="text-4xl font-semibold text-purple-900">
                        <a href="/">
                            Purple
                        </a>
                    </div>

                    <div className="shadow-lg">
                        <div className="flex items-center">
                            <div className="flex items-center border border-gray-300 rounded-md px-2 h-10 ">
                                <div className="mr-3">
                                    <IoSearch />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Try Saree, Kurti or Search by Product Code"
                                    className="text-gray-600 focus:outline-none placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 hover cursor-pointer">
                            <FaMobileAlt />
                            <span className="text-gray-500">Download App</span>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>

                        <div className="flex items-center hover cursor-pointer">
                            <span className="text-gray-500">Become a Supplier</span>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>
                        <div className="flex items-center hover cursor-pointer">
                            <span className="text-gray-500">Newsroom</span>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>
                        <div className="flex items-center hover cursor-pointer space-x-2">
                            <IoMan />
                            <span className="text-gray-500">Profile</span>
                        </div>
                        <div className="border-l border-gray-300 h-8"></div>
                        <div className="flex items-center hover cursor-pointer space-x-2">
                            <GrCart />
                            <span className="text-gray-500">Cart</span>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="border-b border-gray-300 mt-4"></div>

                <div className="flex justify-between">
                    <div className="border-b mt-5 border-gray-300 "></div>
                    <div className="menu-item">Women Ethnic</div>
                    <div className="menu-item">Women Western</div>
                    <div className="menu-item">Men</div>
                    <div className="menu-item">Kids</div>
                    <div className="menu-item">Home & Kitchen</div>
                    <div className="menu-item">Beauty & Health</div>
                    <div className="menu-item">Jewellery & Accessories</div>
                    <div className="menu-item">Bags & Footwear</div>
                    <div className="menu-item mr-10">Electronics</div>

                </div>

                <div className="border-b border-gray-300 mt-4"></div>

            </div>
            <div>
                <div className="bg-gray-100 h-96 w-1/2 ml-44 mr-44 mt-10">
                    <div className="flex justify-center">
                        <h1>
                            <span className="text-4xl font-bold">Lowest Prices <br /></span>
                            <span className="text-4xl font-bold"> Best Quality Shopping</span>
                        </h1>
                        <img src="https://images.meesho.com/images/marketing/1704257501901_512.webp" alt="video thumbnail" />
                    </div>

                    <div className="bg-white h-16 w-96 rounded-lg mt-10 flex space-x-2 ml-11">
                        <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" className="w-8 h-8 ml-2 mt-2" />
                        <span className="text-base text-grey-400 mt-2">Free Delivery</span>
                        <div className="border-l border-gray-400 h-12 mt-2"></div>
                        <img src="https://images.meesho.com/images/pow/cod_jamun.svg" alt="value props" className="mt-2 w-8 h-8" loading="lazy" decoding="async" style={{ color: 'transparent' }} />
                        <span className="text-base text-grey-400 mt-2">Cash on Delivery</span>
                        <div className="border-l border-gray-400 h-12 mt-2"></div>
                        <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" className="mt-2 w-8 h-8" />
                        <span className="text-base text-grey-400 mt-2">Easy Returns</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;
