import React from 'react'
import CustomButton from '../components/CustomButton';

const Newsletter = () => {
    return (
      <section className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold">Subscribe to our newsletter</h2>
        <p className='p-4'>
          Stay updated with new coin releases, blog updates, and exclusive offers delivered straight to your inbox.
        </p>
        <form className="mt-6 flex justify-center items-center">
          <input type="email" placeholder="Your email" className="px-2 h-12  border border-gray-300 rounded-l w-64 md:w-80 text-black border  " />
          <CustomButton text="Subscribe" href="/Subscribe" />
        </form>
      </section>
    );
  };
  
  export default Newsletter;
  

  