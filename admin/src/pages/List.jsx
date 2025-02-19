import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ token }) => {
    const [List, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to fetch product list.");
        }
    };

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(
                backendUrl + '/api/product/remove',
                { id }, 
                { headers: { token } }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                fetchList(); // Refresh product list
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error removing product:", error);
            toast.error("Failed to remove product.");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
            <p className='mb-2 font-semibold'>All Products List</p>
            <div className='flex flex-col gap-2'>

                {/* Table Header */}
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-200 text-sm font-semibold'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b className='text-center'>Action</b>
                </div>

                {/* Product List */}
                {List.length > 0 ? (
                    List.map((item, index) => (
                        <div key={index} className='grid grid-cols-[1fr-3fr-1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-2 px-3 border text-sm'>
                            <img className='w-12 h-12 object-cover rounded-md' src={item.image?.[0] || '/placeholder.jpg'} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            <button 
                                onClick={() => removeProduct(item._id)} 
                                className='text-red-600 hover:text-red-800 text-lg font-bold text-center cursor-pointer'
                            >
                                X
                            </button>
                        </div>
                    ))
                ) : (
                    <p className='text-center text-gray-500 py-4'>No products found.</p>
                )}
            </div>
        </>
    );
};

export default List;
