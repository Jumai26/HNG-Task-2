//import {Link} from 'react-router-dom';
import Menu from '../assets/icons/menu_hamburger.png';
import Profile from '../assets/icons/profile.png'
import Search from '../assets/icons/search.png'
import MyCart from '../assets/icons/mycarts.png'


export default function Navbar() {
    return (
        <div className="my-12 mx-6 sm:mx-20 font-medium flex justify-between font-headings">
            <div>
                <h1 className=' text-xl sm:text-2xl leading-6'>ShoeBank</h1>
            </div>
            <div className='hidden sm:visible sm:flex flex-row justify-between gap-x-10 text-base'>
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className='flex flex-row gap-4 sm:gap-6'>
                <div className='w-4 h-4'>
                    <img src={Search} ></img>
                </div>
                <div className='w-[14px] h-4 hover:w-4 border hover:h-2'>
                    <img src={MyCart} ></img>
                </div>
                <div className='w-3 h-2' >
                    <img src={Profile}></img>
                </div>
                <div className='w-3 h-2 sm:hidden' >
                    <img src={Menu}></img>
                </div>
            </div>
        </div>
    )
}