import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../context/AuthContext";

const Home = () => {
  const {user} = useContext(AuthContexts);
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Explore <br />
            <span className="dark:text-violet-400">Flux</span>Authentication System</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
          </p>
          {
            user?.uid?
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/profile"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:dark:bg-violet-400 hover:dark:border-none hover:text-black"
              >
                Visit Profile
              </Link>
            </div>
            :
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/login"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:dark:bg-violet-400 hover:dark:border-none hover:text-black"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:dark:bg-violet-400 hover:dark:border-none hover:text-black"
              >
                Sign Up
              </Link>
            </div>
            
          }
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={require(`../images/kindpng_2383969.png`)}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
