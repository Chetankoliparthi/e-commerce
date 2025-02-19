import React, { useEffect, useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {  // Ensure products exist before filtering
            const bestProduct = products.filter((item) => item.bestseller === true);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]); // Depend on `products`, so it updates when products are available

    return (
        <div className='py-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus velit quibusdam rerum blanditiis nihil id aspernatur praesentium.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map((item, index) => (
                        <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No best sellers found.</p>
                )}
            </div>
        </div>
    );
};

export default BestSeller;
