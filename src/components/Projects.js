import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const Projects = () => {
    return (
        <div className="w-[100vw] pt-[100px] pb-[10vh] relative bottom-24 flex flex-col rounded-tl-[7.5%] bg-white rounded-tr-[7.5%] lg:px-[8vw]">
            <div className="flex justify-between">
                <div className='border-2 mb-16 border-white border-b-slate-500 pb-6 '>
                    <p className='text-black text-6xl  font-bold'>Our Project <span className='text-2xl text-slate-500'>/</span><span className='text-xl font-bold text-slate-500'> Latest Projects</span></p>

                </div>
                <div>
                    <button className="py-2 px-5 rounded-2xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">View All</button>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-16'>
                <div className='w-[375px] cursor-pointer overflow-hidden hover:h-[575px] transition ease-in-out delay-150 hover:-translate-y-2 h-[350px]  relative hover:top-8'>
                    {/* <div className='absolute w-[375px] opacity-0 hover:opacity-100 cursor-pointer h-[375px] flex justify-center'>
                        <div className='border-8 h-[65px] border-white bg-orange-500 rounded-xl w-[70px] relative bottom-8 flex justify-center items-center'>
                            <ArrowOutwardIcon className='' style={{ color: 'white', fontSize: '30px' }} />
                        </div>
                    </div> */}

                    <img src="https://thumbs.dreamstime.com/z/crane-lifts-shipping-container-view-large-crane-lifting-up-single-shipping-container-cargo-ship-port-175773171.jpg" className='h-[350px] rounded-xl' />

                    <div className='transition ease-in-out delay-150 hover:-translate-y-2'>

                        <p className='text-black w-[375px] flex text-center mt-4'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className='mt-6 border border-orange-500 bg-white text-orange-500 hover:text-white hover:bg-orange-500 px-3 py-2'>Learn More</button>
                    </div>
                </div>
                <div className='w-[375px] cursor-pointer h-[350px] hover:h-[575px] overflow-hidden relative hover:top-8 '>
                    {/* <div className='absolute w-[375px] transition ease-in-out delay-150 hover:-translate-y-2 opacity-0 hover:opacity-100 cursor-pointer h-[350px] flex justify-center'>
                        <div className='border-8 h-[65px] border-white bg-orange-500 rounded-xl w-[65px] relative bottom-8 flex justify-center items-center'>
                            <ArrowOutwardIcon className='' style={{ color: 'white', fontSize: '30px' }} />
                        </div>
                    </div> */}

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg/1200px-MAERSK_MC_KINNEY_M%C3%96LLER_%26_MARSEILLE_MAERSK_%2848694054418%29.jpg" className='h-[350px] rounded-xl' />

                    <div className='transition ease-in-out delay-150 hover:-translate-y-2'>

                        <p className='text-black w-[375px] flex text-center mt-4 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className='mt-6 border border-orange-500 bg-white text-orange-500 hover:text-white hover:bg-orange-500 px-3 py-2'>Learn More</button>
                    </div>
                </div>
                <div className='w-[375px] h-[350px] overflow-hidden cursor-pointer hover:h-[575px] border relative hover:top-8'>
                    {/* <div className='absolute w-[375px] transition ease-in-out delay-150 hover:-translate-y-2  opacity-0 hover:opacity-100 cursor-pointer h-[350px] flex justify-center'>
                        <div className='border-8 h-[70px] border-white bg-orange-500 rounded-xl w-[70px] relative bottom-8 flex justify-center items-center'>
                            <ArrowOutwardIcon className='' style={{ color: 'white', fontSize: '30px' }} />
                        </div>
                    </div> */}

                    <img src="https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/storage-container-hero.webp" className='h-[350px] rounded-xl' />
                    <div className='transition ease-in-out delay-150 hover:-translate-y-2'>

                        <p className='text-black w-[375px] flex text-center mt-4 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className='mt-6 border border-orange-500 bg-white text-orange-500 hover:text-white hover:bg-orange-500 px-3 py-2'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;