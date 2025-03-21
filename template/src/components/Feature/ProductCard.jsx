export function ProductCard({productName='Beoplay M5 Bluetooth Speaker',
    sale=false,
    newStatus=false,
    img="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png",
    stars=2.5,
    price=29.99
}){

    console.log(img)

    function StarRating(stars){
        const totalStars = 5;
        return (
          <div className="flex">
            {[...Array(totalStars)].map((_, index) => {
              let fill = "gray"; // Default to gray
              if (index < Math.floor(stars)) {
                fill = "gold"; // Full star
              } else if (index < stars) {
                fill = "url(#halfGradient)"; // Half-star
              }
      
              return (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <defs>
                    <linearGradient id="halfGradient">
                      <stop offset="50%" stopColor="gold" />
                      <stop offset="50%" stopColor="gray" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01z"
                    fill={fill}
                  />
                </svg>
              );
            })}
          </div>
        );
    }
    return(
        <>
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" src={img || `https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/item-cards/4/product-1.png`} alt={`${productName} image`} />
                </div>

                {sale ? (
                    <div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-white uppercase bg-gray-900 rounded-full">Sale</p>
                    </div>
                ): null}
                 {newStatus ? (
                    <div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">New</p>
                    </div>
                ): null}
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="">
                            {productName}
                        <span className="absolute inset-0" aria-hidden="true"></span>
                        </a>
                        </h3>
                        <div className="flex items-center mt-2.5 space-x-px">
                            {StarRating(stars)}
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">E {price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}