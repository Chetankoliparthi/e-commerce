import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  console.log("Exchange Icon Path:", assets.exchange_icon); // Debugging log

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We Offer Hassle-free exchange</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7days free return policy</p>
      </div>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
