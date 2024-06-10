import React from 'react';
import Image from 'next/image';

const Synchronize = () => {
  return (
    <section className="md:px-40 p-4 py-28 w-full flex flex-col text-center px-">
      <div>
        <h2 className="text-3xl font-bold p-4">Sync your Ledger device with multiple wallets.</h2>
        <p>Cerberus hardware wallet secures more than 50 software wallets</p>
      </div>
      <div className="flex flex-row justify-between pt-8 w-full">
        <div className="w-1/2 flex justify-start">
          <Image
            src="/otherwallet5_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src="/otherwallet1_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between pt-8 w-full">
        <div className="w-1/2 flex justify-around md:pl-40">
          <Image
            src="/otherwallet3_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="w-1/2 flex justify-around md:pr-40">
          <Image
            src="/otherwallet6_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between pt-8 w-full">
        <div className="w-1/2 flex justify-start">
          <Image
            src="/otherwallet2_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src="/otherwallet4_min.png"
            alt="Wallet"
            className=""
            width={80}
            height={80}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Synchronize;
