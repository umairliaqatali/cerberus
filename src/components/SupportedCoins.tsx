import React from 'react';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';

const SupportedCoins = () => {
  return (
    <section className=" md:px-28 p-4 py-28 w-ful flex flex-col border-t border-gray-500 ">
      <div className='flex flex-row justify-between flex-wrap items-start gap-8'>
        <div text-left>
          <h2 className="text-3xl font-bold">Thousands of supported coins and tokens</h2>
          <p className='mt-3 align-left'>Bitcoin, Ethereum, USDT, Solana and more…</p>
        </div>
        <div className='flex-shrink-0'>
            <CustomButton text="See all supported cryptos" href="/supported-cryptos" />
        </div>
      </div>
      <div className="mt-8 px-4 overflow-hidden relative">
        <div className="flex justify-center items-center space-x-16 md:space-x-10 animate-scroll md:animate-none">
          <Image src="/other_coins/coin1.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin2.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin3.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin4.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin5.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin6.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin7.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin8.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin9.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin10.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin11.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>          
          <Image src="/other_coins/coin12.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin13.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin14.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin15.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin16.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin17.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
          <Image src="/other_coins/coin18.png" alt="Wallet" className="py-16" width={56} height={56} priority style={{ objectFit: 'contain' }}/>
        </div>
      </div>
    </section>
  );
};

export default SupportedCoins;
