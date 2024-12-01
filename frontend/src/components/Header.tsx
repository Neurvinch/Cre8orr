import React from 'react';

import {ConnectButton} from '@rainbow-me/rainbowkit';

interface HeaderProps {
  onConnect: () => void;
  isConnected: boolean;
}

const Header: React.FC<HeaderProps> = () => {

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Web3 Social</h1>
        
        <ConnectButton />
     
      </div>
    </header>
  );
};

export default Header;