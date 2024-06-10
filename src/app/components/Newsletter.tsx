import React from 'react'

const Newsletter = () => {
    return (
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Subscribe to our newsletter</h2>
        <form className="mt-6">
          <input type="email" placeholder="Your email" className="p-2 rounded-l" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
            Subscribe
          </button>
        </form>
      </section>
    );
  };
  
  export default Newsletter;
  