import React from 'react';

const Hero = () => (
  <div className="flex pt-10 bg-background sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden items-center lg:min-h-[800px]">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-8">
            <h1 className="pb-3 mt-4 text-4xl font-extrabold leading-[6rem] tracking-tight text-white sm:pb-5 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-7xl">
              <span className="block">Building the web</span>
              <span className="block text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-primary-red to-primary-yellow">
                one line of code
              </span>
              <span className="block"> at a time.</span>
            </h1>
          </div>
        </div>
        <div className="mt-12 -mb-16 lg:ml-32 sm:-mb-48 lg:m-0 lg:relative">
          <img
            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src="/assets/images/code.svg"
            alt="code"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
