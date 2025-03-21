import { Services } from "../../data/Services"

export function Feature({sectionName='',sectionText='Lorem ipsum dolor sit amet, consectetur adipis elit'}){

    return (
        <>
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">{sectionName}</h2>
                        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">{sectionText}</p>
                    </div>

                    <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">

                        {Services.map((service,index)=>{
                            return (
                                <div key={index} className={`md:p-8 lg:p-14 ${service.classes}`}>
                                    <div className="w-14 h-14 mx-auto ">
                                        <img src={service.img} alt="" className="" />
                                    </div>
                                    <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">{service.name}</h3>
                                    <p className="mt-5 text-base text-gray-600 font-pj">{service.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}