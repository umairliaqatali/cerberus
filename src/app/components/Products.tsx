import React from 'react'

const Products = () => {
    return (
      <section className="text-center py-20 bg-gray-800">
        <h2 className="text-3xl font-bold">Find your perfect Cerberus hardware wallet</h2>
        <div className="mt-8 flex justify-around">
          <div className="w-1/3 bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-bold">Cerberus Safe (Model Zero)</h3>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Model Zero
            </button>
          </div>
          <div className="w-1/3 bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-bold">Cerberus Safe (Model X)</h3>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Model X
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Products;
  