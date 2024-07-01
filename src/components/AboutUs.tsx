import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="md:h-900 overflow-hidden bg-[url('/large-back2.png')] bg-contain bg-bottom bg-no-repeat" id="aboutus">
      <h2 className='text-3xl md:text-5xl leading-relaxed p-4 md:p-28 md:px-80 text-zinc-600 '>
        Cerberus Wallet is revolutionizing the wallet experience by offering unparalleled security, simplicity, and accessibility. Experience full autonomy and independence as you manage your assets with just one tap. Cerberus Wallet removes obstacles for crypto newcomers and elevates the custodial experience for advanced users.
      </h2>
      {/* <div className=''>
        <div className="flex justify-center items-center bg-highlight-radial-about-us">
          <Image 
            src="/wallet2.png" 
            alt="Wallet" 
            className="py-16" 
            width={627} 
            height={361} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;
{/* <section className="bg-[url('/wallet1.png')] bg-contain bg-bottom  bg-no-repeat flex flex-wrap justify-around items-center py-10 p-4 md:px-28 md:h-900 bg-custom-about-us"></section> */}