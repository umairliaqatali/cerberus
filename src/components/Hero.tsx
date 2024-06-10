import React from 'react'
import Image from 'next/image';
import CustomButton from '../components/CustomButton';

const Hero = () => {
  return (
    <section className="text-center py-20 px-3 min-h-screen bg-highlight-radial">
      <div className="flex justify-center items-center">
        <Image 
          src="/wallet1.png" 
          alt="Wallet" 
          className="py-16" 
          width={627} 
          height={361} 
          priority 
          style={{ objectFit: 'contain' }} 
        />
      </div>
      <h1 className="text-5xl font-bold text-white">One Wallet, Infinite Possibilities</h1>
      <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
      {/* <button className="mt-6 bg-custom-dark hover:shadow-custom-teal hover:shadow-expand text-white font-bold py-2 px-4 rounded-br-2xl shadow-lg shadow-custom-teal transition-shadow duration-300 ease-in-out">
        More Details
      </button> */}
      <div className='mt-10'>
        <CustomButton text="Get your Cerberus" href="/get-cerberus" />
      </div>
      
    </section>
  );
};

export default Hero;
  