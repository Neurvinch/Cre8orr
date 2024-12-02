import React from "react";
import "./hero.css";
import bgImage from "./bg.png";
import comoImage from "./como.png";
import Header from './Coverhead';

export default function Hero() {
  return (
    <div
      className="bgimg text-white h-screen w-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "rgb(43, 43, 43)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-6">
        <nav className="flex h-9 items-center justify-between" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <h1 className="text-3xl font-bold text-dark">NFT Media</h1>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-2">
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">Home</a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">Services</a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">Our Team</a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">Blog</a>
            </div>
          </div>
        </nav>
      </div>
      
      
      */}
      <Header />


      {/* Hero Section */}
      <main>
        <div className="pt-5 sm:pt-16 lg:pt-6 lg:pb-11 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Social Media in</span>
                    <span className="block">Web3</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <a href="/Home" className="btn-grad">
                          Let's Dive in
                        </a>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{" "}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-8 sm:max-w-1xl lg:max-w-none lg:px-12">
                  <img
                    alt="Dog"
                    className="animme lg:absolute lg:max-w-3xl"
                    src={comoImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
