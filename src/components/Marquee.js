const Marquee = () => {
    return (
        <div className="w-[100vw] h-[120px] border flex items-center bg-slate-100">
            <marquee direction='left' >
                <div className="flex flex-row">
                    <p className="text-6xl text-slate-500 font-bold ml-8">AMAZON</p>
                    <p className="text-6xl text-slate-500 font-bold ml-8">DHL</p>
                    <p className="text-6xl text-slate-500 font-bold ml-8">Fed Ex</p>
                    <p className="text-6xl text-slate-500 font-bold ml-8">Jumia</p>
                    <p className="text-6xl text-slate-500 font-bold ml-8">AliExpress</p>
                </div>


            </marquee>
        </div>
    )
}
export default Marquee;