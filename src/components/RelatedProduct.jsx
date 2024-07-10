

import Shoefirst from '../assets/images/shoefirst.png'
import Shoesecond from '../assets/images/shoetwo.png'
import Shoethird from '../assets/images/shoethree.png'
import ShoeFourth from '../assets/images/shoefour.png'
import ShoeFifth from '../assets/images/shoefive.png'
import ShoeSix from '../assets/images/shoesix.png'
import ShoeSeven from '../assets/images/shoeseven.png'
import ShoeEight from '../assets/images/shoeeight.png'
import Love from '../assets/icons/love.png'
import Cart from '../assets/icons/cart.png'
import Review from './Review'


export default function BestSellers() {
    return (
        <div className='sm:mx-20 mb-20 mx-6 sm:mt-20 font-headings font-medium'>
            <p className='sm:text-4xl sm:leading-10 pt-9 pb-4 sm:mb-10'>Related Products</p>
            {/* <div className='grid grid-cols-2 sm:grid-cols-4 justify-stretch gap-x-2 gap-y-8 sm:gap-6 '> */}
            <div className=' flex flex-row flex-wrap flex-shrink flex-grow justify-between sm:justify-between gap-x-2 gap-y-8 sm:gap-6 '>
                <div className='relative justify-between w-[127px] h-[132px] sm:w-[250px] sm:h-[257px]'>
                    <img src={Shoefirst} className='w-[127px] h-[95px] sm:w-[250px] bg-[#F3F4F3] rounded-xl sm:h-[180px] m-auto'></img>
                    <div className='relative -right-28 -top-[89px] sm:-right-52 sm:-top-44 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-white sm:rounded-md'><img src={Love} className=' w-full sm:p-2 rounded-full'></img></div>
                    <div className='sm:-my-6'>
                        <Review />
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N959,765<span className='text-[4.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                        <div className='relative -right-28 -top-5 sm:-right-52 sm:-top-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-secondary-color sm:rounded-md'><img src={Cart} className=' w-full sm:p-2 rounded-full'></img></div>
                    </div>
                </div>
                <div className='justify-between w-[127px] h-[132px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={Shoesecond} className='w-[127px] h-[95px] sm:w-[250px] bg-[#F3F4F3] rounded-xl sm:h-[180px] m-auto'></img>
                    <div className='relative -right-28 -top-[89px] sm:-right-52 sm:-top-44 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-white sm:rounded-md'><img src={Love} className=' sm:p-2 rounded-full'></img></div>
                    <div className=' sm:-my-6'>
                        <Review />
                        <p className='text-[9px] sm:text-sm sm:leading-4 font-normal sm:my-2'>Nike Swimming Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-1 sm:my-2'>N459,765<span className='text-[4.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                        <div className='relative -right-28 -top-5 sm:-right-52 sm:-top-10 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-secondary-color sm:rounded-md'><img src={Cart} className=' w-full sm:p-2 rounded-full'></img></div>
                    </div>
                </div>
                <div className='justify-between w-[127px] h-[132px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={Shoethird} className='w-[127px] h-[95px] sm:w-[250px] bg-[#F3F4F3] rounded-xl sm:h-[180px] m-auto'></img>
                    <div className='relative -right-28 -top-[89px] sm:-right-52 sm:-top-44 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-white sm:rounded-md'><img src={Love} className=' sm:p-2 rounded-full'></img></div>
                    <div className='sm:-my-6'>
                        <Review />
                        <p className=' text-[9px] sm:text-sm sm:leading-4 font-normal sm:my-2'>Nike Jogging Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-1 sm:my-2'>N195,765<span className='text-[4.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                        <div className='relative -right-28 -top-5 sm:-right-52 sm:-top-10 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-secondary-color sm:rounded-md'><img src={Cart} className=' w-full sm:p-2 rounded-full'></img></div>
                    </div>
                </div>
                <div className='justify-between item-center w-[127px] h-[132px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={ShoeFourth} className=' w-[127px] h-[95px] sm:w-[250px] bg-[#F3F4F3] rounded-xl sm:h-[180px] m-auto'></img>
                    <div className='relative -right-28 -top-[89px] sm:-right-52 sm:-top-44 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-white sm:rounded-md'><img src={Love} className=' sm:p-2 rounded-full'></img></div>
                    <div className=' -my-1 sm:-my-6'>
                        <Review />
                        <p className=' text-[9px] sm:text-sm sm:leading-4 font-normal sm:my-2'>Nike Track Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-1 sm:my-2'>N95,765<span className='text-[4.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                        <div className='relative -right-28 -top-5 sm:-right-52 sm:-top-10 z-10 w-3 h-3 rounded-full sm:h-7 sm:w-7 bg-secondary-color sm:rounded-md'><img src={Cart} className=' w-full sm:p-2 rounded-full'></img></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


