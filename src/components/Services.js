import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Services = () => {
    return (
        <div className="w-[100vw] pb-[30vh] bg-black rounded-tl-[7.5%] lg:px-[8vw] pt-24 rounded-tr-[7.5%] md:rounded-tr-[5%] md:rounded-tl-[5%] flex flex-col">
            <div className='border-2 mb-16 border-black border-b-slate-500 pb-4 md:pl-8'>
                <p className='text-white lg:text-6xl md:text-4xl  font-bold'>LATEST SERVICES <span className='text-2xl text-slate-500'>/</span><span className='text-xl font-bold text-slate-500'> Our Services</span></p>
            </div>
            <div className='flex lg:flex-row  justify-between w-[100vw] overflow-x-hidden'>
                <div className='flex flex-col '>
                    <div className='flex flex-row w-[25vw]   justify-between py-6 border-2 border-black hover:border-b-slate-400 px-6 cursor items-center'>
                        <p className='lg:text-4xl md:text-3xl text-white'>Freight Transport</p>
                        <div className='border p-3 rounded-full  border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                    <div className='flex flex-row w-[25vw] mt-4 justify-between py-6 border-2 border-black hover:border-b-slate-400 px-6 cursor items-center'>
                        <p className='lg:text-4xl text-3xl text-white'>Cargo Shipment</p>
                        <div className='border p-3 rounded-full  border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                    <div className='flex flex-row w-[25vw] mt-4 border-2 border-black hover:border-b-slate-400 justify-between py-6 px-6 cursor items-center'>
                        <p className='lg:text-4xl text-3xl text-white'>Freight Transport</p>
                        <div className='border p-3 rounded-full  border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                    <p className='text-white w-[400px] mt-16 md:ml-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/68/14/b2/6814b231fe1726f0a251388d9f97c828.png" />
                </div>
            </div>
        </div>
    )
}
export default Services;