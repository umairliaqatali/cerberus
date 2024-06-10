import React from 'react'

const Newsletter = () => {
    return (
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Subscribe to our newsletter</h2>
        <p className='p-4'>
          Stay updated with new coin releases, blog updates, and exclusive offers delivered straight to your inbox.
        </p>
        <form className="mt-6">
          <input type="email" placeholder="Your email" className="p-2 rounded-l" />
          <button type="submit" className="py-4 bg-custom-dark hover:shadow-custom-teal hover:shadow-expand text-white font-bold py-2 px-4 rounded-br-2xl shadow-lg shadow-custom-teal transition-shadow duration-300 ease-in-out">
            Subscribe
          </button>
        </form>
      </section>
    );
  };
  
  export default Newsletter;
  