import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Shoeone from "../assets/images/shoefirst.png";
import Thrash from "../assets/icons/thrash.png";
import Shoeseven from "../assets/images/shoeseven.png";
import Shoeeight from "../assets/images/shoeeight.png";
import Footer from "../components/Footer";

export default function Checkout(params) {
    return (
        <div className='font-headings font-medium gap-9 mb-0 '>
            <Navbar />
            <div className="sm:mx-20 mb-3 mx-6 sm:my-20 ">
                <h1 className='sm:text-4xl sm:leading-10 sm:mb-10'>Checkout</h1>
                <div className=" sm:grid sm:grid-cols-2 flex flex-col gap-6">
                    <div className="">
                        <div className="flex flex-col justify-between content-start">
                            <p className='text-[12px] mt-9 sm:text-xl leading-none sm:leading-2 font-medium sm:my-1' >Shipping Details</p>
                            <hr className="my-3"></hr>
                            <div className="flex flex-row justify-between">
                                <p className='text-[10px] sm:text-base leading-none sm:leading-2 font-bold sm:my-1'>Fullstack Mechanic </p>
                                <p className="text-[10px] sm:text-base">something@gmail.com</p>
                            </div>
                            <p className='text-[9px] sm:text-base leading-none font-medium sm:my-1'>14, Afeolusegun Street, <br />Denro Ishasi, Akute, <br />Ojodu Berger.</p>
                            <p className='text-[12px] sm:text-xl leading-none sm:leading-2 font-medium sm:my-1 pt-16'>Payment Details</p>
                            <hr className="my-3"></hr>
                            <form method="post" className="container ">
                                <div className='flex flex-col justify-start pt-4'>
                                    <label id="name" for="name" className="text-[12px] sm:text-base">Name on card</label>
                                    <input id="name" type="text" placeholder="e.g Fullstack Mechanic" className='border rounded-xl border-gray-600 h-10 sm:h-14 my-1 placeholder:pl-3 placeholder:text-[12px] placeholder:sm:text-base' required />
                                </div>
                                <div className='flex flex-col justify-start pt-6'>
                                    <label className="text-[12px] sm:text-base"> Card Number</label>
                                    <input id="email" type="number" placeholder="e.g 123 45 678" className='border rounded-xl border-gray-600 h-10 sm:h-14 my-1 placeholder:pl-3 placeholder:text-[12px] placeholder:sm:text-base ' required />
                                </div>
                                <div className='grid grid-cols-2 gap-6 pt-6'>
                                    <div className='flex flex-col justify-start '>
                                        <label className="text-[12px] sm:text-base" > Exp. Date</label>
                                        <input id="email" type="number" placeholder="e.g 10/10/2005" className='border rounded-xl border-gray-600 h-10 sm:h-14 my-1 placeholder:pl-3 placeholder:text-[12px] placeholder:sm:text-base' required />
                                    </div>
                                    <div className='flex flex-col justify-start '>
                                        <label className="text-[12px] sm:text-base"> CVV</label>
                                        <input id="email" type="number" placeholder="e.g 001" className='border rounded-xl border-gray-600 h-10 sm:h-14my-1 placeholder:pl-3 placeholder:text-[12px] placeholder:sm:text-base' required />
                                    </div>
                                </div>
                                <div>
                                    <Link to="/">
                                        <button className='w-full p-3 bg-secondary-color rounded-xl text-white text-[11.19px] leading-3 sm:text-base sm:leading-6 mt-5 hover:p-2 hover:border-green-950 hover:border'>Checkout (N751,331) </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-[9px] sm:text-xl leading-none sm:leading-2 font-medium sm:my-1'>Order</h1>
                        <hr className="my-3"></hr>
                        <div>
                            <div className=" flex flex-row justify-between content-start ">
                                <div className="flex flex-row gap-x-4">
                                    <div>
                                        <img src={Shoeone} className=' w-[127px] h-[80px] sm:w-[127px] sm:h-[100px] p-2 sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                                    </div>
                                    <div className="">
                                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-medium sm:my-2'>Nike Running Shoe</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>In Stock</p>
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
                        <div className="col-span-3" >
                            <div className=" flex flex-row justify-between content-start ">
                                <div className="flex flex-row gap-x-4">
                                    <div>
                                        <img src={Shoeseven} className=' w-[127px] h-[80px]  sm:w-[127px] sm:h-[100px] p-2 sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                                    </div>
                                    <div className="">
                                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-medium sm:my-2'>Nike Running Shoe</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>In Stock</p>
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
                        <div className="col-span-3">
                            <div className=" flex flex-row justify-between content-start  ">
                                <div className="flex flex-row gap-x-4">
                                    <div>
                                        <img src={Shoeeight} className=' w-[127px] h-[80px] p-2 sm:w-[127px] sm:h-[100px] sm:p-5 bg-[#F3F4F3] rounded-xl m-auto'></img>
                                    </div>
                                    <div className="">
                                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-medium sm:my-2'>Nike Running Shoe</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>Seller: Timbu Official Store-DORE2 | Variation: M/L</p>
                                        <p className='text-[9px] sm:text-[10px] leading-none sm:leading-2 font-medium sm:my-1'>In Stock</p>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
};
