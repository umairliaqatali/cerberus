// import React from 'react'
// import Image from 'next/image';
// import CustomButton from '../components/CustomButton';

// const Hero = () => {
//   return (
//     <section className="text-center py-20 px-3 min-h-screen bg-highlight-radial">
//       <div className="flex justify-center items-center">
//         <Image 
//           src="/wallet1.png" 
//           alt="Wallet" 
//           className="py-16" 
//           width={627} 
//           height={361} 
//           priority 
//           style={{ objectFit: 'contain' }} 
//         />
//       </div>
//       <h1 className="text-5xl font-bold text-white">One Wallet, Infinite Possibilities</h1>
//       <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
//       {/* <button className="mt-6 bg-custom-dark hover:shadow-custom-teal hover:shadow-expand text-white font-bold py-2 px-4 rounded-br-2xl shadow-lg shadow-custom-teal transition-shadow duration-300 ease-in-out">
//         More Details
//       </button> */}
//       <div className='mt-10'>
//         <CustomButton text="Get your Cerberus" href="/get-cerberus" />
//       </div>
      
//     </section>
//   );
// };

// export default Hero;

// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import CustomButton from '../components/CustomButton';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const containerRef = useRef();

//   useGSAP(() => {
//     const tl1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.section1',
//         // start: 'top+=top+62px top',
//         start: 'top top',
//         end: 'bottom top',
//         pin: true,
//         scrub: true,
//         markers: true,
//         onEnter: () => gsap.to('.section1', { autoAlpha: 1 }), // Make section visible on enter
//         onLeave:  () => gsap.to('.section1', { autoAlpha: 0 }),
//         // onLeaveBack: () => gsap.to('.section1', { autoAlpha: 1 }), // Make section invisible on leave back
//         onEnterBack: () => gsap.to('.section1', { autoAlpha: 1 }), // Make section invisible on leave back
//       },
//     });
//     tl1.fromTo('.section1 img', { scale: 1 }, { scale: 2, duration: 1 });
//     tl1.fromTo('.section1 h1', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");
//     tl1.fromTo('.section1 p', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.section2',
//         start: 'top top',
//         end: 'bottom top',
//         pin: true,
//         scrub: true,
//         markers: true,
//         onEnter: () => gsap.to('.section2', { autoAlpha: 1 }), // Make section visible on enter
//         onLeave:  () => gsap.to('.section2', { autoAlpha: 0 }),
//         onLeaveBack: () => gsap.to('.section2', { autoAlpha: 0 }), // Make section invisible on leave back
//         onEnterBack: () => gsap.to('.section2', { autoAlpha: 1 }), // Make section invisible on leave back
//       },
//     });
//     tl2.fromTo('.section2 img', { scale: 1 }, { scale: 2, duration: 1 });
//     tl2.fromTo('.section2 h1', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");
//     tl2.fromTo('.section2 p', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");

//     const tl3 = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.section3',
//         start: 'top top',
//         end: 'bottom center',
//         pin: true,
//         scrub: true,
//         markers: true,
//         onEnter: () => gsap.to('.section3', { autoAlpha: 1 }), // Make section visible on enter
//         onLeaveBack: () => gsap.to('.section3', { autoAlpha: 0 }), // Make section invisible on leave back
//         onEnterBack: () => gsap.to('.section3', { autoAlpha: 1 }), // Make section invisible on leave back
//       },
//     });
//     tl3.fromTo('.section3 img', { scale: 1 }, { scale: 2, duration: 1 });
//     tl3.fromTo('.section3 h1', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");
//     tl3.fromTo('.section3 p', { scale: 1 }, { scale: 1.2, duration: 1 }, "<");

//     // Initially set all sections except the first to be invisible
//     gsap.set('.section2, .section3', { autoAlpha: 0 });
//   }, { scope: containerRef });

//   return (
//     <div ref={containerRef} className='trigger flex flex-col '>
//       <section className="hero-section section1 text-center py-20 px-3 min-h-screen bg-highlight-radial">
//         <div className="flex justify-center items-center">
//           <Image 
//             src="/wallet1.png" 
//             alt="Wallet" 
//             className="py-16 hero-image" 
//             width={627} 
//             height={361} 
//             priority 
//             style={{ objectFit: 'contain' }} 
//           />
//         </div>
//         <h1 className="text-5xl font-bold text-white">One Wallet, Infinite Possibilities</h1>
//         <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
//         <div className='mt-10'>
//           <CustomButton text="Get your Cerberus" href="/get-cerberus" />
//         </div>
//       </section>

//       <section className="hero-section section2 text-center py-20 px-3 min-h-screen bg-highlight-radial">
//         <div className="flex justify-center items-center">
//           <Image 
//             src="/wallet1.png" 
//             alt="Wallet" 
//             className="py-16 hero-image" 
//             width={627} 
//             height={361} 
//             priority 
//             style={{ objectFit: 'contain' }} 
//           />
//         </div>
//         <h1 className="text-5xl font-bold text-white">Two Wallet, Infinite Possibilities</h1>
//         <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
//         <div className='mt-10'>
//           <CustomButton text="Get your Cerberus" href="/get-cerberus" />
//         </div>
//       </section>

//       <section className="hero-section section3 text-center py-20 px-3 min-h-screen bg-highlight-radial">
//         <div className="flex justify-center items-center">
//           <Image 
//             src="/wallet1.png" 
//             alt="Wallet" 
//             className="py-16 hero-image" 
//             width={627} 
//             height={361} 
//             priority 
//             style={{ objectFit: 'contain' }} 
//           />
//         </div>
//         <h1 className="text-5xl font-bold text-white">Three Wallet, Infinite Possibilities</h1>
//         <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
//         <div className='mt-10'>
//           <CustomButton text="Get your Cerberus" href="/get-cerberus" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;


'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        onEnter: () => gsap.to('.section1', { autoAlpha: 1 }),
        onLeave: () => gsap.to('.section1', { autoAlpha: 0 }),
        onEnterBack: () => gsap.to('.section1', { autoAlpha: 1 }),
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        onEnter: () => gsap.to('.section2', { autoAlpha: 1 }),
        onLeave: () => gsap.to('.section2', { autoAlpha: 0 }),
        onLeaveBack: () => gsap.to('.section2', { autoAlpha: 0 }),
        onEnterBack: () => gsap.to('.section2', { autoAlpha: 1 }),
      },
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
        onEnter: () => gsap.to('.section3', { autoAlpha: 1 }),
        onLeaveBack: () => gsap.to('.section3', { autoAlpha: 0 }),
        onEnterBack: () => gsap.to('.section3', { autoAlpha: 1 }),
      },
    });

    if (isMobile) {
      tl1.fromTo('.section1 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl1.fromTo('.section1 h1', { scale: 1, y: 0 }, { scale: 1, y: 15, duration: 1 }, "<");
      tl1.fromTo('.section1 p', { scale: 1, y: 0 }, { scale: 0.9, y: 10, duration: 1 }, "<");

      tl2.fromTo('.section2 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl2.fromTo('.section2 h1', { scale: 1, y: 0 }, { scale: 1, y: 15, duration: 1 }, "<");
      tl2.fromTo('.section2 p', { scale: 1, y: 0 }, { scale: 0.9, y: 10, duration: 1 }, "<");

      tl3.fromTo('.section3 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl3.fromTo('.section3 h1', { scale: 1, y: 0 }, { scale: 1, y: 25, duration: 1 }, "<");
      tl3.fromTo('.section3 p', { scale: 1, y: 0 }, { scale: 0.9, y: 20, duration: 1 }, "<");
    } else {
      tl1.fromTo('.section1 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl1.fromTo('.section1 h1', { scale: 1, y: 0 }, { scale: 1.5, y: 230, duration: 1 }, "<");
      tl1.fromTo('.section1 p', { scale: 1, y: 0 }, { scale: 1.5, y: 280, duration: 1 }, "<");

      tl2.fromTo('.section2 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl2.fromTo('.section2 h1', { scale: 1, y: 0 }, { scale: 1.5, y: 230, duration: 1 }, "<");
      tl2.fromTo('.section2 p', { scale: 1, y: 0 }, { scale: 1.5, y: 280, duration: 1 }, "<");

      tl3.fromTo('.section3 img', { scale: 1 }, { scale: 1.5, duration: 1 });
      tl3.fromTo('.section3 h1', { scale: 1, y: 0 }, { scale: 1.5, y: 230, duration: 1 }, "<");
      tl3.fromTo('.section3 p', { scale: 1, y: 0 }, { scale: 1.5, y: 280, duration: 1 }, "<");
    }

    gsap.set('.section2, .section3', { autoAlpha: 0 });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='trigger flex flex-col '>
      <section className="hero-section section1 text-center py-20 px-3 min-h-screen bg-highlight-radial">
        <div className="flex justify-center items-center">
          <Image 
            src="/cerberus model_x_min.png" 
            alt="Wallet" 
            className="py-16 hero-image" 
            width={327} 
            height={361} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <h1 className="text-5xl font-bold text-white">One Wallet, Infinite Possibilities</h1>
        <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
        <div className='mt-10'>
          <CustomButton text="Get your Cerberus" href="/get-cerberus" />
        </div>
      </section>

      <section className="hero-section section2 text-center py-20 px-3 min-h-screen bg-highlight-radial">
        <div className="flex justify-center items-center">
          <Image 
            src="/cerberus model_x_min.png" 
            alt="Wallet" 
            className="py-16 hero-image" 
            width={327} 
            height={361} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <h1 className="text-5xl font-bold text-white">Two Wallet, Infinite Possibilities</h1>
        <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
        <div className='mt-10'>
          <CustomButton text="Get your Cerberus" href="/get-cerberus" />
        </div>
      </section>

      <section className="hero-section section3 text-center py-20 px-3 min-h-screen bg-highlight-radial">
        <div className="flex justify-center items-center">
          <Image 
            src="/cerberus model_x_min.png" 
            alt="Wallet" 
            className="py-16 hero-image" 
            width={327} 
            height={361} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
        <h1 className="text-5xl font-bold text-white">Three Wallet, Infinite Possibilities</h1>
        <p className="mt-4 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae nisl in arcu elementum ultricies.</p>
        <div className='mt-10'>
          <CustomButton text="Get your Cerberus" href="/get-cerberus" />
        </div>
      </section>
      <div className='min-h-screen mt-20'></div>
    </div>
  );
};

export default Hero;