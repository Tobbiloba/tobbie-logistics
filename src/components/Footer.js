import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Footer = () => {
    return (
        <div className="w-[100vw] lg:h-[70vh] md:[70vh] px-[8vw] lg:pt-24 md:pt-20 pt-12 bg-black flex flex-col justify-between rounded-tl-[10%] rounded-tr-[10%]">
            <div className='flex py-4 flex-row  items-center lg:px-12 md:px-10 px-3'>
                <p className='lg:text-6xl md:text-4xl text-3xl text-white font-bold'>SEARCHING FOR A FIRST <br />CLASS <span className='text-orange-500'>CONSULTANT</span></p>
                <div className='ml-20 overflow-hidden w-24 h-24 flex justify-center items-center rounded-full bg-orange-500'>
                    <button className=''>
                        <ArrowForwardIcon style={{ color: 'white', fontSize: '44px' }} />
                    </button>
                </div>

            </div>
            <div className='flex mt-8 lg:mt-0 md:mt-0 md:flex-wrap flex-col  lg:justify-between md:justify-center'>
                <div className='flex flex-col gap-3'>
                    <p className='text-xl font-normal font-serif text-slate-300'>Our Services</p>
                    <p className='text-xl font-normal font-serif text-slate-300'>Our Portfolio</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>Contact Us</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>Team Member</p>
                </div>
                <div className='flex flex-col gap-3 mt-8 lg:mt-0 md:mt-0'>
                    <p className='text-xl font-thin font-serif text-slate-300'>About Us</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>Blog</p>
                </div>
                <div className='flex flex-col gap-3 mt-8 lg:mt-0 md:mt-0'>
                    <p className='text-2xl font-bold font-serif text-orange-500'>Contact Info</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>tobbie-rentals@gmail.com</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>+234700549732978</p>
                </div>
                <div className='flex flex-col gap-3 mt-8 lg:mt-0 md:mt-0'>
                    <p className='text-2xl font-bold font-serif text-orange-500'>Headquater</p>
                    <p className='text-xl font-thin font-serif text-slate-300'>No 2 victoria island, Ikeja, <br /> Lagos state, Nigeria</p>
                </div>
            </div>
            <div className='text-white  mt-6 lg:mt-0 md:mt-0'>
                <p>copyright 2023 tobbie-Investment Lc</p>
            </div>
        </div>
    )
}
export default Footer;