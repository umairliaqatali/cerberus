// 'use client';
// import React, { useEffect } from 'react';
// import Image from 'next/image';

// const Synchronize = () => {
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       document.querySelectorAll('.parallax').forEach((layer) => {
//         const speed = layer.getAttribute('data-speed');
//         const x = (window.innerWidth - e.pageX * speed) / 100;
//         const y = (window.innerHeight - e.pageY * speed) / 100;

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//       });
//     };

//     if (window.innerWidth < 768) {
//       window.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <section className="md:px-40 p-4 py-28 w-full flex flex-col text-center">
//       <div>
//         <h2 className="text-3xl font-bold p-4">Sync your Ledger device with multiple wallets.</h2>
//         <p>Cerberus hardware wallet secures more than 50 software wallets</p>
//       </div>
//       <div className="flex flex-row justify-between pt-8 w-full">
//         <div className="w-1/2 flex justify-start">
//           <Image
//             src="/otherwallet5_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="2"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="w-1/2 flex justify-end">
//           <Image
//             src="/otherwallet1_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="2.1"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//       </div>
//       <div className="flex flex-row justify-between pt-8 w-full">
//         <div className="w-1/2 flex justify-around md:pl-40">
//           <Image
//             src="/otherwallet3_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="1.5"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="w-1/2 flex justify-around md:pr-40">
//           <Image
//             src="/otherwallet6_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="2"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//       </div>
//       <div className="flex flex-row justify-between pt-8 w-full">
//         <div className="w-1/2 flex justify-start">
//           <Image
//             src="/otherwallet2_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="1.4"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//         <div className="w-1/2 flex justify-end">
//           <Image
//             src="/otherwallet4_min.png"
//             alt="Wallet"
//             className="parallax"
//             data-speed="1.3"
//             width={80}
//             height={80}
//             priority
//             style={{ objectFit: 'contain' }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Synchronize;

'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const Synchronize = () => {
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.parallax-section');
      const sectionRect = section.getBoundingClientRect();
      
      if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
        document.querySelectorAll('.parallax').forEach((layer) => {
          const speed = layer.getAttribute('data-speed');
          const y = (window.scrollY - section.offsetTop) * speed / 10;

          layer.style.transform = `translateY(${Math.min(Math.max(y, -50), 50)}px)`;
        });
      }
    };

    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="parallax-section md:px-40 p-4 py-28 w-full flex flex-col text-center">
      <div>
        <h2 className="text-3xl font-bold p-4">Sync your Ledger device with multiple wallets.</h2>
        <p>Cerberus hardware wallet secures more than 50 software wallets</p>
      </div>
      <div className="flex flex-row justify-between pt-8 w-full">
        <div className="w-1/2 flex justify-start">
          <Image
            src="/otherwallet5_min.png"
            alt="Wallet"
            className="parallax"
            data-speed="2"
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
            className="parallax"
            data-speed="2.1"
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
            className="parallax"
            data-speed="1.5"
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
            className="parallax"
            data-speed="2"
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
            className="parallax"
            data-speed="1.4"
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
            className="parallax"
            data-speed="1.3"
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