import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shoeone from "../assets/images/shoefirst.png";
import Thrash from "../assets/icons/thrash.png";
import Shoeseven from "../assets/images/shoeseven.png";
import Shoeeight from "../assets/images/shoeeight.png";
import RelatedProduct from "../components/RelatedProduct";
import Footer from "../components/Footer";

export default function AllCart() {
    return (
        <div className='font-headings font-medium gap-9 mb-0'>
            <Navbar />
            <div className=" sm:mx-20 mb-3 mx-6 sm:m-0 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-3 sm:pt-12">
                <div className="col-span-2">
                    <div className=" flex flex-row justify-between content-start">
                        <div className="flex flex-row gap-x-4">
                            <div>
                                <img src={Shoeone} className=' w-[127px] h-[80px] p-2 sm:w-[127px] sm:h-[100px] sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                            </div>
                            <div className="">
                                <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-semibold sm:my-2'>Nike Running Shoe</p>
                                <p className='text-[9px] sm:text-[12px] leading-3 sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                <p className='text-[9px] sm:text-[12px] leading-3 sm:leading-2 font-medium sm:my-1'>In Stock</p>
                                <div className="flex flex-row flex-start mt-5 sm:mt-7">
                                    <img className='w-3 h-3' src={Thrash}></img>
                                    <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium align-center'>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-[10.5px] leading-none sm:text-lg sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</h1>
                        </div>
                    </div>
                    <hr className="my-5"></hr>
                </div>
                <div className="hidden sm:block sm:row-span-3">
                    <p className='text-[9px] sm:text-base leading-4 sm:leading-4 font-medium sm:my-2'>Cart Summary</p>
                    <div className="flex flex-row justify-between sm:mt-8">
                        <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium '>Sub total</p>
                        <span className=" sm:text-lg sm:leading-3 font-semibold">N751,331</span>
                    </div>
                    <p className='text-[9px] sm:text-[10px]leading-none sm:leading-2 font-medium '>Delivery fee not included yet</p>
                    <Link to="/checkout">
                        <button className='w-full p-3 bg-secondary-color rounded-xl text-white text-[11.19px] leading-3 sm:text-sm sm:leading-6 mt-5 hover:p-2 hover:border-green-950 hover:border'>Checkout (N751,331) </button> 
                    </Link>
                    <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium mt-6'>Returns are easy</p>
                    <p className='text-[9px] sm:text-[10px]leading-none sm:leading-2 font-medium '>free return within 7 days for ALL eligible items</p>
                </div>
                <div className="col-span-2" >
                    <div className=" flex flex-row justify-between content-start ">
                        <div className="flex flex-row gap-x-4">
                            <div>
                                <img src={Shoeseven} className=' w-[127px] h-[80px] p-2 sm:w-[127px] sm:h-[100px] sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                            </div>
                            <div className="">
                                <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-semibold sm:my-2'>Nike Running Shoe</p>
                                <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium sm:my-1'>In Stock</p>
                                <div className="flex flex-row flex-start mt-7">
                                    <img className='w-3 h-3' src={Thrash}></img>
                                    <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium align-center'>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-[10.5px] leading-none sm:text-lg sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</h1>
                        </div>
                    </div>
                    <hr className="my-5"></hr>
                </div>
                <div className="col-span-2">
                    <div className=" flex flex-row justify-between content-start  ">
                        <div className="flex flex-row gap-x-4">
                            <div>
                                <img src={Shoeeight} className=' w-[127px] h-[80px] p-2 sm:w-[127px] sm:h-[100px] sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                            </div>
                            <div className="">
                                <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-semibold sm:my-2'>Nike Running Shoe</p>
                                <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium sm:my-1'>In Stock</p>
                                <div className="flex flex-row flex-start mt-6 sm:mt-7">
                                    <img className='w-3 h-3' src={Thrash}></img>
                                    <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium align-center'>Remove</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className=' text-[10.5px] leading-none sm:text-lg sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</h1>
                        </div>
                    </div>
                    <hr className="my-5"></hr>
                </div>
                <div className="visible sm:hidden row-span-2 sm:row-span-3">
                    <p className='text-[12px] leading-4 font-medium '>Cart Summary</p>
                    <div className="flex flex-row justify-between content-center mt-7">
                        <p className='text-[10px] leading-none font-medium'>Sub total</p>
                        <span className=" sm:text-lg sm:leading-3 font-semibold">N751,331</span>
                    </div>
                    <p className='text-[9px] leading-none font-medium -mt-2 pt-0'>Delivery fee not included yet</p>
                    <Link to="/checkout">
                        <button className='w-full p-3 bg-secondary-color rounded-xl text-white text-[11.19px] leading-3 sm:text-sm sm:leading-6 mt-5 hover:p-2 hover:border-green-950 hover:border'>Checkout (N751,331) </button> 
                    </Link>
                    <p className='text-[9px] sm:text-[12px] leading-none sm:leading-2 font-medium mt-6'>Returns are easy</p>
                    <p className='text-[9px] sm:text-[10px]leading-none sm:leading-2 font-medium '>free return within 7 days for ALL eligible items</p>
                </div>
            </div>
            <RelatedProduct />
            <Footer />
        </div>
    )
};
