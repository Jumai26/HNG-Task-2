import Facebook from '../assets/icons/facebook.png'
import Twitter from '../assets/icons/twitter.png'
import Instagram from '../assets/icons/instagram.png'

export default function Footer(params) {
    return (
        <div className='m-0 font-body font-normal text-sm bg-black text-white'>
            <div className="flex justify-center gap-10 sm:pt-10 ">
                <p>About</p>
                <p> Blog</p>
                <p>Job</p>
                <p>Press</p>
                <p>Accessibility</p>
                <p>Partners</p>
            </div>
            <div  className="flex justify-center gap-10 sm:pt-10 ">
                <img src={Facebook} ></img>
                <img src={Twitter} ></img>
                <img src={Instagram} ></img>
            </div>
            <div className="flex justify-center gap-10 sm:py-10 ">© 2024 Fullstack Mechanic. All rights reserved</div>
        </div>
    )
};
