import PaymentsIcon from '@mui/icons-material/Payments';
import InventoryIcon from '@mui/icons-material/Inventory';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const Steps = () => {
    return (
        <div className="w-[100vw] pb-32 relative rounded-tl-[7.5%] bg-white rounded-tr-[7.5%] px-[8vw] pt-12">
            <div className="flex justify-between">
                <div className='border-2 mb-16 border-white pt-16 border-b-slate-500 pb-6 '>
                    <p className='text-slate-800 lg:text-6xl md:text-5xl text-3xl  font-bold'>HOW IT WORKS <span className='text-2xl text-slate-500'>/</span><span className='text-xl font-bold text-slate-500'> Fast Steps</span></p>

                </div>
            </div>
            <div className='flex lg:flex-row flex-col md:flex-row md:flex-wrap justify-evenly mt-8'>
                <div className="flex border bg-slate-300 rounded-2xl w-[300px] lg:mb-0 md:mb-0 mb-4 h-[350px] p-4 flex-col justify-between items-start px-4">
                    <div className='border p-5 rounded-full bg-white'>
                        <AirportShuttleIcon style={{ fontSize: '32px' }} />
                    </div>
                    <p className='text-2xl font-bold text-white'>Track <br /> Selection</p>
                </div>
                <div className="flex border bg-slate-300 rounded-2xl w-[300px] lg:mb-0 md:mb-0 mb-4  h-[350px] p-4 flex-col justify-between items-start px-4">
                    <div className='border p-5 rounded-full bg-white'>
                        <InventoryIcon style={{ fontSize: '32px' }} />
                    </div>
                    <p className='text-2xl font-bold text-white'>
                        Order <br /> Shipping
                    </p>
                </div>
                <div className="flex border md:mt-16 rounded-2xl w-[300px] bg-orange-500 h-[350px] p-4 flex-col justify-between items-start px-4">
                    <div className='border p-5 rounded-full bg-white'>
                        <PaymentsIcon style={{ color: 'orange', fontSize: '32px' }} />
                    </div>
                    <p className='text-2xl text-white font-bold'>
                        Take Your <br /> Product
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Steps;