import Star from '../assets/icons/vector.png'

export default function Review() {
    return (
        <div className='flex flex-row gap-x-1 w-[167px] sm:w-[250px] sm:mx-20 mb-3 mx-6 sm:m-0 font-headings font-medium'>
            <div className='flex flex-row'>
                <img src={Star} className='w-[9.8px] h-[9.8px] sm:w-[14px] sm:h-[14px]'></img>
                <img src={Star} className='w-[9.8px] h-[9.8px] sm:w-[14px] sm:h-[14px]'></img>
                <img src={Star} className='w-[9.8px] h-[9.8px] sm:w-[14px] sm:h-[14px]'></img>
                <img src={Star} className='w-[9.8px] h-[9.8px] sm:w-[14px] sm:h-[14px]'></img>
                <img src={Star} className='w-[9.8px] h-[9.8px] sm:w-[14px] sm:h-[14px]'></img>
            </div>
            <p className='text-[6px] sm:text-[9px] sm:leading-[10px] p-[2px]'>(5.8k Reviews)</p>
        </div>
    )
};
