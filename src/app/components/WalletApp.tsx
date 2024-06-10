import React from 'react'

const WalletApp = () => {
    return (
      <section className="flex justify-around items-center py-20">
        <div className="w-1/2 p-6">
          <img src="/path/to/your/image" alt="Wallet App" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold">Discover the power of crypto with the Cerberus app</h2>
          <p className="mt-4 text-lg">Get access to full-featured wallet with swap, buy, sell, and earn functionalities.</p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="bg-gray-900 p-4 rounded">Download on the App Store</a>
            <a href="#" className="bg-gray-900 p-4 rounded">Get it on Google Play</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default WalletApp;
  