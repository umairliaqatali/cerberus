import React from 'react';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';

const Products = () => {
  return (
    <section className="md:px-28 p-4 py-28 w-full flex flex-col">
      <div className='flex flex-row justify-between flex-wrap items-start gap-4'>
        <div className='text-left md:w-auto w-full'>
          <h2 className="text-3xl font-bold">Find your perfect Cerberus hardware wallet</h2>
        </div>
        <div className='mt-4 md:mt-0'>
          <CustomButton text="Compare our hardware wallets" href="/compare-wallets" />
        </div>
      </div>
      <div className="mt-32 flex flex-wrap md:flex-nowrap items-start gap-12">
        <div className="md:w-1/2 w-full p-6 rounded bg-highlight-radial shadow-top-bottom">
          <div className="flex justify-center items-center">
            <Image
              src="/cerberus_model_0_min.png"
              alt="cerberus model 0"
              className="py-16"
              width={388}
              height={350}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h5 className="mt-4 text-lg text-center">Hardware wallet</h5>
          <h4 className="py-3 text-xl font-bold text-center">Cerberus Safe (Model Zero)</h4>
          <div className='flex justify-center'>
            <svg width="175" height="27" viewBox="0 0 175 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#F5A81C" />
              <path d="M50.5 0L53.5309 9.32827H63.3393L55.4042 15.0935L58.4351 24.4217L50.5 18.6565L42.5649 24.4217L45.5958 15.0935L37.6607 9.32827H47.4691L50.5 0Z" fill="#F5A81C" />
              <path d="M87.5 0L90.5309 9.32827H100.339L92.4042 15.0935L95.4351 24.4217L87.5 18.6565L79.5649 24.4217L82.5958 15.0935L74.6607 9.32827H84.4691L87.5 0Z" fill="#F5A81C" />
              <path d="M124.5 0L127.531 9.32827H137.339L129.404 15.0935L132.435 24.4217L124.5 18.6565L116.565 24.4217L119.596 15.0935L111.661 9.32827H121.469L124.5 0Z" fill="#F5A81C" />
              <path d="M161.5 0L164.531 9.32827H174.339L166.404 15.0935L169.435 24.4217L161.5 18.6565L153.565 24.4217L156.596 15.0935L148.661 9.32827H158.469L161.5 0Z" fill="#F5A81C" />
            </svg>
          </div>
          <p className='mt-4 text-center'>
            Lorem Ipsum is a scrambled version of a passage
            from De finibus bonorum et malorum (The
            Extremes of Good and Evil) by Cicero,
            written in 45 BC.
          </p>
          <div className='my-12 flex justify-center'>
            <CustomButton text="Get Cerberus" href="/model-x" />
          </div>
        </div>
        <div className="md:w-1/2 w-full p-6 rounded bg-highlight-radial shadow-top-bottom">
          <div className="flex justify-center items-center">
            <Image
              src="/cerberus model_x_min.png"
              alt="cerberus model 0"
              className="py-16"
              width={388}
              height={350}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h5 className="mt-4 text-lg text-center">Hardware wallet</h5>
          <h4 className="py-3 text-xl font-bold text-center">Cerberus Safe (Model X)</h4>
          <div className='flex justify-center'>
            <svg width="175" height="27" viewBox="0 0 175 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 0L16.5309 9.32827H26.3393L18.4042 15.0935L21.4351 24.4217L13.5 18.6565L5.5649 24.4217L8.59584 15.0935L0.660737 9.32827H10.4691L13.5 0Z" fill="#F5A81C" />
              <path d="M50.5 0L53.5309 9.32827H63.3393L55.4042 15.0935L58.4351 24.4217L50.5 18.6565L42.5649 24.4217L45.5958 15.0935L37.6607 9.32827H47.4691L50.5 0Z" fill="#F5A81C" />
              <path d="M87.5 0L90.5309 9.32827H100.339L92.4042 15.0935L95.4351 24.4217L87.5 18.6565L79.5649 24.4217L82.5958 15.0935L74.6607 9.32827H84.4691L87.5 0Z" fill="#F5A81C" />
              <path d="M124.5 0L127.531 9.32827H137.339L129.404 15.0935L132.435 24.4217L124.5 18.6565L116.565 24.4217L119.596 15.0935L111.661 9.32827H121.469L124.5 0Z" fill="#F5A81C" />
              <path d="M161.5 0L164.531 9.32827H174.339L166.404 15.0935L169.435 24.4217L161.5 18.6565L153.565 24.4217L156.596 15.0935L148.661 9.32827H158.469L161.5 0Z" fill="#F5A81C" />
            </svg>
          </div>
          <p className='mt-4 text-center'>
            Lorem Ipsum is a scrambled version of a passage
            from De finibus bonorum et malorum (The
            Extremes of Good and Evil) by Cicero,
            written in 45 BC.
          </p>
          <div className='my-12 flex justify-center'>
            <CustomButton text="Get Cerberus" href="/model-x" />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Products;
