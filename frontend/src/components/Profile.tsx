import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold text-white">John Doe</h2>
          <p className="text-white opacity-80">@johndoe</p>
        </div>
      </div>
      <p className="text-white mt-4">
        Web3 enthusiast and blockchain developer. Exploring the decentralized future!
      </p>
    </div>
  );
};

export default Profile;
