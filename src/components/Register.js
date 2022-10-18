import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center py-10 bg-cyan-900">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 w-1/2">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm dark:text-gray-400">
            Sign up to to get our outstanding services
          </p>
        </div>
        <form
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email..."
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="confirmpass"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 hover:dark:bg-violet-500 transition-all"
              >
                Sign Up
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Already have an account?
              <a
                rel="noopener noreferrer"
                href="/#"
                className="hover:underline dark:text-violet-400"
              >
                Sign In
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
