import Shoefirst from '../assets/images/shoefirst.png'
import Shoesecond from '../assets/images/shoetwo.png'
import Shoethird from '../assets/images/shoethree.png'
import ShoeFourth from '../assets/images/shoefour.png'
import ShoeFifth from '../assets/images/shoefive.png'
import ShoeSix from '../assets/images/shoesix.png'
import ShoeSeven from '../assets/images/shoeseven.png'
import ShoeEight from '../assets/images/shoeeight.png'
import Review from './Review'


export default function BestSellers() {
    return (
        <div className='sm:mx-20 mb-3 mx-6 sm:m-0 font-headings font-medium'>
            <p className='sm:text-4xl sm:leading-10 sm:mb-10'>Best Sellers</p>
            <div className=' flex flex-row flex-wrap flex-shrink justify-evenly sm:justify-between gap-8 sm:gap-6 '>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={Shoefirst} className='w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='sm:my-2'>
                        <Review />
                        <p className='text-[11px] sm:text-sm leading-none sm:leading-4 font-normal'>Nike Running Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N959,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={Shoesecond} className='w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <div className='content-start'><Review /></div>
                        <p className='text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Swimming Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N459,765<span className='text-[6.2px]sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={Shoethird} className='w-[167px] h-[125px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className=' text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Jogging Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N195,765<span className='text-[6.2px]sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={ShoeFourth} className=' w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className=' text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Track Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N95,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 p-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={ShoeFifth} className='w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className='text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Luke Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N959,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px]  rounded-t-xl'>
                    <img src={ShoeSix} className='w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className='text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Sport Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N959,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl' >
                    <img src={ShoeSeven} className='w-[167px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className='text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Event Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N959,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
                <div className='justify-center item-center w-[167px] h-[172px] sm:w-[250px] sm:h-[257px] rounded-t-xl'>
                    <img src={ShoeEight} className='w-[167px] h-[125px] sm:w-[250px] bg-[#F3F4F3] rounded-t-xl sm:h-[180px] m-auto'></img>
                    <div className='my-2'>
                        <Review />
                        <p className='text-[11px] sm:text-sm sm:leading-4 font-normal'>Nike Race Shoe</p>
                        <p className='text-[9.5px] leading-none sm:text-sm sm:leading-3 font-semibold my-2'>N959,765<span className='text-[6.2px] sm:text-[8px] sm:leading-3 px-3 font-normal text-[#979797]'>4,430 Sold</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
