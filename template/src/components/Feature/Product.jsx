import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductsInfo } from '../../data/Products';


export function Products() {   
    return (
            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Our Products</h2>
                    <p className="mt-4 text-base font-normal leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
                        {ProductsInfo.map((product,index)=>{
                            return (
                                <ProductCard key={index} productName={product.productName}
                                    sale={product.sale}
                                    newStatus={product.new}
                                    img={product.img}
                                    stars={product.stars}
                                    price={product.price}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>

    )
}
