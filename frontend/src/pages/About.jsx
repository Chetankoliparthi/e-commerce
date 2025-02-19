import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className ='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae pariatur iste libero dolorem ducimus harum ut ullam quibusdam alias quasi id nostrum magnam at vel, earum possimus aliquam explicabo totam?</p>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quod eos voluptate nam reiciendis minima temporibus saepe. Quidem deserunt veniam earum illo porro excepturi sequi ab rem vitae, suscipit eos?</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi a aperiam corrupti animi atque deserunt, id eum corporis dignissimos, reprehenderit cum omnis quia ipsam harum aliquam, ipsa est odio.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia cumque eos, odio error obcaecati a quam voluptatibus quaerat deleniti fuga quidem adipisci ad alias dicta praesentium corrupti! Dolorem, tempora ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia cumque eos, odio error obcaecati a quam voluptatibus quaerat deleniti fuga quidem adipisci ad alias dicta praesentium corrupti! Dolorem, tempora ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia cumque eos, odio error obcaecati a quam voluptatibus quaerat deleniti fuga quidem adipisci ad alias dicta praesentium corrupti! Dolorem, tempora ab.</p>
        </div>
      </div>
    </div>
  )
}

export default About
