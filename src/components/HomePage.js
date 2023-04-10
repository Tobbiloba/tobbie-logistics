const HomePage = () => {
    return (
        <div className="flex flex-col lg:px-[8vw] lg:pt-32 md:pt-28 pt-32 md:px-[5vw] px-[5vw] ">
            <div className="flex lg:flex-row md:flex-row flex-col mb-20">
                <div className="text-center flex lg:mr-12 md:mr-6">
                    <p className="lg:text-[150px] mb-4 md:text-8xl font-bold text-5xl font-mono">LOGISTICS<br />SOLUTION</p>
                </div>
                <div className="flex items-end flex-col lg:flex-col md:flex-col pl-[30vw] lg:pl-0 md:pl-0">
                    <img src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?cs=srgb&dl=pexels-julius-silver-753331.jpg&fm=jpg" className="h-[120px] mb-4 w-[300px] rounded-r-full rounded-l-full" />
                    <p className="text-slate-500 h-[120px] w-[300px]">We pride ourselves on providing the best transport & shipping services available all over the world</p>
                </div>
            </div>
            <div>
                <img src="https://www.openaccessgovernment.org/wp-content/uploads/2022/09/dreamstime_xxl_114206008-scaled.jpg" className="rounded-tl-[20vw] rounded-tr-[20vw]" />
            </div>
        </div>
    )
}
export default HomePage;