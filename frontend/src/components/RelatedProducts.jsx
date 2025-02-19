import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let filteredProducts = products
                .filter((item) => item.category === category && item.subCategory === subCategory);
            setRelated(filteredProducts.slice(0, 5));
        }
    }, [products, category, subCategory]);  // ✅ Added dependencies

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1="RELATED" text2="PRODUCTS" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.length > 0 ? (
                    related.map((item, index) => (
                        <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                ) : (
                    <p className="col-span-5 text-center">No related products found</p>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
