import React from 'react';
import Image from 'next/image';
import CustomButton from '../components/CustomButton';

const CrossPlatform = () => {
  return (
    <section className='flex flex-wrap justify-around items-center py-10 p-4 md:px-28 md:h-900'>
      <div className='flex items-end w-full md:w-2/5 justify-center md:justify-end mb-10 md:mb-0'>
        <Image 
          src="/mobile-frame-min.png" 
          alt="app" 
          className="pl-5 md:pl-20 self-end" 
          width={403} 
          height={845} 
          priority 
        />
      </div>
      <div className='w-full md:w-3/5 md:pl-20'>
        <div>
          <svg width="81" height="65" viewBox="0 0 81 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.46094 42.873V5.56109C9.46094 3.01261 11.5343 0.9375 14.0845 0.9375H62.9091C65.4576 0.9375 67.5327 3.01087 67.5327 5.56109V12.7384H64.7641V5.56109C64.7641 4.53751 63.9309 3.70432 62.9074 3.70432H14.0845C13.0609 3.70432 12.2278 4.53751 12.2278 5.56109V40.1062H44.6383V42.873H9.46094Z" fill="#D9D9D9" />
            <path d="M7.00823 50.1159C3.19162 50.1159 0.0859375 47.0103 0.0859375 43.1937C0.0859375 41.4539 1.50079 40.0391 3.24053 40.0391H44.6415V42.8059H3.24053C3.02743 42.8059 2.85275 42.9788 2.85275 43.1937C2.85275 45.4854 4.71652 47.3491 7.00823 47.3491H44.6415V50.1159H7.00823Z" fill="#D9D9D9" />
            <path d="M3.24275 40.3906C1.69514 40.3906 0.4375 41.6483 0.4375 43.1959C0.4375 46.8203 3.38598 49.7688 7.01044 49.7688H44.2944V47.7007H7.01044C4.52659 47.7007 2.50562 45.6797 2.50562 43.1959C2.50562 42.7906 2.83576 42.4588 3.24275 42.4588H44.2944V40.3906H3.24275Z" fill="#D9D9D9" />
            <path d="M51.1475 64.4571C48.3178 64.4571 46.0156 62.1549 46.0156 59.3252V18.7941C46.0156 16.2107 48.1169 14.1094 50.7004 14.1094H75.4043C77.9878 14.1094 80.0891 16.2107 80.0891 18.7941V59.3252C80.0891 62.1549 77.7869 64.4571 74.9572 64.4571H51.1475ZM50.7004 16.8762C49.6436 16.8762 48.7824 17.7373 48.7824 18.7941V59.3252C48.7824 60.63 49.8427 61.6903 51.1475 61.6903H74.9572C76.2602 61.6903 77.3223 60.63 77.3223 59.3252V18.7941C77.3223 17.7373 76.4611 16.8762 75.4043 16.8762H50.7004Z" fill="#D9D9D9" />
          </svg>
        </div>
        <h2 className='text-3xl font-bold pt-10'>Cross Platform Availability</h2>
        <p className='mt-4 text-lg md:w-4/5 w-full '>
          &quot;Lorem Ipsum&quot; is a scrambled version of a passage from &quot;De finibus bonorum et malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. &quot;Lorem Ipsum&quot; is a scrambled version of a passage from &quot;De finibus bonorum et malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. &quot;Lorem Ipsum&quot; is a scrambled version of a passage from &quot;De finibus bonorum et malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        </p>
      </div>
    </section>
  );
};

export default CrossPlatform;
