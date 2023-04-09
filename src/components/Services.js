import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Services = () => {
    return (
        <div className="w-[100vw] pb-[30vh] bg-black rounded-tl-[7.5%] lg:px-[8vw] pt-24 rounded-tr-[7.5%] flex flex-col">
            <div className='border-2 mb-16 border-black border-b-slate-500 pb-4'>
                <p className='text-white text-6xl  font-bold'>LATEST SERVICES <span className='text-2xl text-slate-500'>/</span><span className='text-xl font-bold text-slate-500'> Our Services</span></p>
            </div>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <div className='flex flex-row w-[25vw]  justify-between py-6 border-2 border-black hover:border-b-slate-400 px-6 cursor items-center'>
                        <p className='text-4xl text-white'>Freight Transport</p>
                        <div className='border p-3 rounded-full border border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                    <div className='flex flex-row w-[25vw] mt-4 justify-between py-6 border-2 border-black hover:border-b-slate-400 px-6 cursor items-center'>
                        <p className='text-4xl text-white'>Cargo Shipment</p>
                        <div className='border p-3 rounded-full border border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                    <div className='flex flex-row w-[25vw] mt-4 border-2 border-black hover:border-b-slate-400 justify-between py-6 px-6 cursor items-center'>
                        <p className='text-4xl text-white'>Freight Transport</p>
                        <div className='border p-3 rounded-full border border-white hover:bg-orange-500 hover:p-5'>
                            <ArrowOutwardIcon style={{ color: 'white' }} className='cursor-pointer' />
                        </div>

                    </div>
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/68/14/b2/6814b231fe1726f0a251388d9f97c828.png" />
                </div>
            </div>
        </div>
    )
}
export default Services;