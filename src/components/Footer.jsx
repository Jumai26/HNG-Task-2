import Facebook from '../assets/icons/facebook.png'
import Twitter from '../assets/icons/twitter.png'
import Instagram from '../assets/icons/instagram.png'

export default function Footer(params) {
    return (
        <div className='m-0 font-body font-normal text-[9px] sm:text-sm bg-black text-white'>
            <div className="flex justify-center gap-3 sm:gap-10 sm:pt-10 ">
                <p>About</p>
                <p> Blog</p>
                <p>Job</p>
                <p>Press</p>
                <p>Accessibility</p>
                <p>Partners</p>
            </div>
            <div  className="flex justify-center gap-3 sm:gap-10 pt-3 sm:pt-10 ">
                <img src={Facebook} className='w-3 h-3 sm:w-5 sm:h-5'></img>
                <img src={Twitter} className='w-3 h-3 sm:w-5 sm:h-5'></img>
                <img src={Instagram} className='w-3 h-3 sm:w-5 sm:h-5' ></img>
            </div>
            <div className="flex justify-center gap-x-10 py-3 sm:py-10 ">© 2024 Fullstack Mechanic. All rights reserved</div>
        </div>
    )
};
