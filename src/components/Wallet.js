import React from "react";

const Wallet = () => {
  return (
    <div className="min-h-screen dark:bg-gray-800 pt-20 pl-20">
      <section className="dark:text-gray-100">
        <div className="flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/3"
            style={{backgroundImage: `url("https://imageio.forbes.com/specials-images/imageserve/61b0b92f8b9952cba5c07bcd/Bitcoin-Cryptocurrency-trends-Graphs-and-charts/1960x0.jpg?format=jpg&width=960")`, backgroundPosition: 'center', backgroundSize: 'cover'}}
          ></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <h1 className="text-5xl text-semibold font-Secular text-amber-300">Balance: BTC 200</h1>
            <h2 className="text-3xl font-semibold leading-none">
              Welcome to the world of crypto
            </h2>
            <p className="mt-4 mb-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              voluptatum rem amet!
            </p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-amber-600 hover:dark:bg-amber-700 dark:text-gray-900">
              Get started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
