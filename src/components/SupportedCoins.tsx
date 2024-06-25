import React from 'react';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';

const SupportedCoins = () => {
  return (
    <section className="md:px-28 p-4 py-28 w-ful flex flex-col border-t border-gray-500">
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
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {Array.from({ length: 18 }).map((_, index) => (
              <li key={index}>
                <Image
                  src={`/other_coins/coin${index + 1}.png`}
                  alt={`Coin ${index + 1}`}
                  width={56}
                  height={56}
                  priority
                />
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, index) => (
              <li key={index}>
                <Image
                  src={`/other_coins/coin${index + 1}.png`}
                  alt={`Coin ${index + 1}`}
                  width={56}
                  height={56}
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportedCoins;