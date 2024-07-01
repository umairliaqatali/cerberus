import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const faqItems = [
  {
    question: "Why should I use a hardware wallet?",
    answer: "Using a crypto hardware wallet ensures top-notch security by storing private keys offline, shielding them from online threats like hacking and phishing. With full user control, support for multiple currencies, and robust backup options, hardware wallets offer peace of mind and convenience in managing your digital assets. Moreover, hardware wallets empower users with full control and ownership of their private keys, ensuring autonomy in managing and securing their funds. They also support a wide range of cryptocurrencies, enabling convenient storage and management of diverse digital assets within a single device.",
  },
  {
    question: "What is the difference between a 2-card and a 3-card set?",
    answer: "A 2-card set typically includes two hardware wallets, while a 3-card set includes three. The additional card provides an extra layer of backup and security, ensuring that your assets remain safe even if one or more cards are lost or damaged.",
  },
  {
    question: "What are the different types of crypto wallets?",
    answer: "There are several types of crypto wallets, including hardware wallets, software wallets, and paper wallets. Hardware wallets are physical devices that store your private keys offline. Software wallets are applications that run on your computer or mobile device. Paper wallets are physical pieces of paper with your private and public keys printed on them.",
  },
  {
    question: "How does a hardware wallet work?",
    answer: "A hardware wallet works by generating and storing your private keys offline, away from the internet. When you want to make a transaction, you connect the hardware wallet to your computer or mobile device, sign the transaction with your private key, and then send the signed transaction to the blockchain. This process ensures that your private keys are never exposed to the internet, keeping them safe from hackers.",
  },
  {
    question: "Can I use a seed phrase in the wallet?",
    answer: "Yes, you can use a seed phrase to restore your hardware wallet. A seed phrase is a series of words that represent your private keys. If you lose your hardware wallet, you can use the seed phrase to restore your wallet and access your assets on a new device.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setActiveIndex(null);
      } else {
        setIsMobile(false);
        setActiveIndex(0);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleDesktop = (index: number) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleToggleMobile = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-28" id="faq">
      <h2 className="text-3xl font-bold text-left mb-10">Get Clarifications on Your Queries</h2>
      
      {/* Desktop View */}
      <div className="hidden md:flex md:space-x-8">
        <div className="md:w-1/3 space-y-4">
          {faqItems.map((item, index) => (
            <button
              key={index}
              className={clsx(
                "w-full text-left text-lg font-medium text-white rounded-md px-4 py-4 flex justify-between items-center border border-neutral-500 bg-gradient-to-r from-neutral-800 to-neutral-950",
                { "bg-gradient-to-r from-neutral-800 to-neutral-950": activeIndex === index }
              )}
              onClick={() => handleToggleDesktop(index)}
            >
                <h6>
                    {item.question}
                </h6>
              
              <span className="ml-4">
                {activeIndex === index ? (
                  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17V12.935L10.0126 7.86179V10.1382L1 5.06504V1L11 6.88618V11.1138L1 17Z" fill="#D9D9D9" stroke="#D9D9D9" stroke-linejoin="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.06504 1L10.1382 10.0126H7.86179L12.935 1L17 1L11.1138 11H6.88618L1 1Z" fill="" stroke="#D9D9D9" stroke-linejoin="round"/>
                  </svg>
                )}
              </span>
            </button>
          ))}
        </div>
        <div className="md:w-2/3 mt-8 md:mt-0 p-6 rounded-lg ">
          {activeIndex !== null && (
            <p className="text-gray-300 text-left text-xl">{faqItems[activeIndex].answer}</p>
          )}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              className={clsx(
                "w-full text-left text-lg font-medium text-white p-4 rounded-md flex justify-between items-center border border-neutral-500 bg-gradient-to-r from-neutral-800 to-neutral-950",
                { "text-white": activeIndex === index }
              )}
              onClick={() => handleToggleMobile(index)}
            >
                <h6>
                    {item.question}
                </h6>
              <span className="ml-4">
                {activeIndex === index ? (
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5.06504 1L10.1382 10.0126H7.86179L12.935 1L17 1L11.1138 11H6.88618L1 1Z" fill="#D9D9D9" stroke="#D9D9D9" stroke-linejoin="round"/>
                  </svg>
                ) : (
                  <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17V12.935L10.0126 7.86179V10.1382L1 5.06504V1L11 6.88618V11.1138L1 17Z" fill="" stroke="#D9D9D9" stroke-linejoin="round"/>
                  </svg>
                )}
              </span>
            </button>
            <div className={clsx(
              "transition-all overflow-hidden",
              { "max-h-0": activeIndex !== index, "max-h-screen": activeIndex === index }
            )}>
              <p className="pt-2 text-white text-left">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
