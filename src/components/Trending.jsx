import Trendingone from '../assets/images/trendingone.png'
import Trendingtwo from '../assets/images/trendingtwo.png'
import Trendingthree from '../assets/images/trendingthree.png'
import Trendingfour from '../assets/images/trendingfour.png'
import Trendingfive from '../assets/images/trendingfive.png'

export default function Trending(params) {
    return (
        <div className='sm:mx-20 my-3 mx-6 sm:-mt-12 sm:mb-6 font-headings font-medium'>
            <p className='sm:text-4xl sm:leading-10 sm:mb-10'>Trending Products</p>
            <div className="grid sm:grid-cols-4 stretch flex-grow gap-x-2 gap-y-8 sm:gap-6">
                <div>
                    <img src={Trendingone}></img>
                    <div>
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</p>
                    </div>
                </div>
                <div>
                    <img src={Trendingtwo}></img>
                    <div>
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</p>
                    </div>
                </div>
                <div className="col-span-2 row-span-2">
                    <img src={Trendingthree}></img>
                    <div>
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</p>
                    </div>
                </div>
                <div>
                    <img src={Trendingfour}></img>
                    <div>
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</p>
                    </div>
                </div>
                <div>
                    <img src={Trendingfive}></img>
                    <div>
                        <p className='text-[9px] sm:text-sm leading-none sm:leading-4 font-normal sm:my-2'>Nike Running Shoe</p>
                        <p className='text-[7.5px] leading-none sm:text-sm sm:leading-3 font-semibold mb-2 sm:my-2'>N95,765</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
