export function Hero({headline='',subpasage='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus.',ctaBtn=''}){
    return(
        <>
            <section className="pt-22 bg-secondaryColor">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-2 lg:grid-rows-3 gap-x-6 gap-y-8 lg:max-w-none">
                        <div className="self-center lg:col-span-1 text-primaryColor grid-rows-1">
                            <h1 className="text-3xl font-bold sm:text-4xl xl:text-5xl">
                                {headline}
                            </h1>
                            <p className="mt-5 text-base font-normal leading-7">
                                {subpasage}
                            </p>

                            <div className="relative inline-flex mt-9 group">
                                <div
                                className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                                </div>

                                <a href="#" title=""
                                className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 text-secondaryColor"
                                role="button">
                                    {ctaBtn}
                                </a>
                            </div>
                        </div>


                        <div className="self-end lg:col-span-1">
                            <img className="w-full mx-auto" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/author.png" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}