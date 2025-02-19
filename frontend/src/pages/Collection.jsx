import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Productitem from '../components/Productitem';

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle subcategory selection
  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubcategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Apply filtering based on category and subcategory
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subcategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  // Ensure `products` update properly
  const sortProducts = () => {
    let sortedProducts = [...filterProducts]; // Create a new array to avoid mutating state
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        return; // If "relevant", do nothing
    }
    setFilterProducts(sortedProducts);
  };
  

  // Re-apply filter when category or subcategory changes
  useEffect(() => {
    applyFilter();
  }, [category, subcategory,search,showSearch,products]);
  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-8'>
      
      {/* Sidebar Filters */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden' 
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img className={`h-3 transition-transform ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>  
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'MEN'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'WOMEN'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'KIDS'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/* Sub category */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? 'block' : 'hidden'} sm:block`}>  
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubcategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubcategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubcategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side (Sort & Products) */}
      <div className='flex-1'>

        {/* Title & Sort By */}
        <div className='flex justify-between items-center w-full text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select 
             className='border-2 border-gray-300 text-sm px-2' 
             onChange={(e) => setSortType(e.target.value)}
          >
             <option value="relevant">Sort by: Relevant</option>
             <option value="low-high">Sort by: Low to High</option>
             <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* Products Grid - moved inside flex-1 */}
        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index) => (
              <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Collection;
