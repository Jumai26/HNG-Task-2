import Exploreone from '../assets/images/exploreone.png'
import Exploretwo from '../assets/images/exploretwo.png'

export default function Explore() {
    return (
        <div className='sm:mx-20 my-3 mx-6 sm:mt-24 h-[575px] font-headings font-medium grid sm:grid-cols-2 stretch flex-grow gap-x-2 gap-y-8 sm:gap-6'>
            <div className=" -mb-12 sm:mb-0">
                <p className='mt-16 sm:mt-0 sm:text-4xl sm:leading-[55px] mb-0'>Explore New <span className='visible sm:hidden'>Collections</span></p>
                <p className='hidden sm:block sm:-mt-3 sm:text-4xl sm:leading-[55px] mb-5'>Collections </p>
                <img src={Exploreone}></img>
            </div>
            <div className="">
                <img src={Exploretwo}></img>
                <p className='text-[10px] leading-[14px] text-[#8B9D98] my-6 sm:my-[33px] sm:text-lg sm:leading-6'>Explore new options. Experience fresh styles, designs, perfect for updating your wardrobe with quality kicks</p>
                <button className=' my-2 p-3 sm:p-5 text-xs text-secondary-color border-secondary-color border rounded-2xl text-align'>Shop Now</button>
            </div>
        </div>
    )
};
