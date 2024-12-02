import React, { useState, useEffect } from "react";
import "./hero.css";

export default function Head() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
    <div className=" ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <h1 className="text-3xl font-bold text-dark">Bondify</h1>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-2">
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">
                Home
              </a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="/home">
                Services
              </a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">
                Our Team
              </a>
              <a className="font-semibold px-3 py-3 text-dark hover:text-dark" href="#">
                Blog
              </a>
            </div>
            <div className="flex items-center gap-4 mr-8">
              <button
                onClick={connectWallet}
                className="flex justify-center gap-4 items-center h-8 p-4 rounded-xl hover:bg-[#E25319] border-[#E25319] border-[5px]"
              >
                <span className="is-link has-text-weight-bold">
                  {walletAddress
                    ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
                </span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
