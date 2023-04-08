const MenuBar = () => {
    return (
        <div className=" border w-[100vw] h-[100vh] flex flex-row lg:px-[10vw] md:px-[7.5vw] px-6 justify-between py-4">
            <div>
                <p className="text-2xl font-bold text-slate-800">Tobbie<span className="text-3xl text-slate-500">|</span>Logistics</p>
            </div>
            <div className="lg:flex md:flex hidden flex-row ">
                <p className="hover:text-slate-500 cursor-pointer hover:font-bold">Home</p>
                <p className="ml-8 hover:text-slate-500 cursor-pointer hover:font-bold">Services</p>
                <p className="ml-8 hover:text-slate-500 cursor-pointer hover:font-bold">About</p>
                <p className="ml-8 hover:text-slate-500 cursor-pointer hover:font-bold">Resources</p>
            </div>
            <div>
                <button className="border py-2 px-3 rounded-2xl bg-slate-800 text-slate-200 hover:border-slate-800 hover:bg-white hover:text-slate-800">Contact Us</button>
            </div>
            <div className="absolute bg-white lg:hidden md:hidden flex flex-row justify-evenly items-center bottom-20 rounded-2xl w-[90vw] h-[100px] border border-slate-100">
                <div>
                    <p className="hover:text-bold hover:text-slate-500 cursor-pointer">Home</p>
                </div>
                <div>
                    <p className="hover:text-bold hover:text-slate-500 cursor-pointer">Services</p>
                </div>
                <div>
                    <p className="hover:text-bold hover:text-slate-500 cursor-pointer">About</p>
                </div>
                <div>
                    <p className="hover:text-bold hover:text-slate-500 cursor-pointer">Resources</p>
                </div>
            </div>
        </div>
    )
}
export default MenuBar;