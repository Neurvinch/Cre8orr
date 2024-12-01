import React from 'react';

interface PostItemProps {
  content: string;
  image: string | null;
}

const PostItem: React.FC<PostItemProps> = ({ content, image }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold text-white">John Doe</h3>
          <p className="text-white opacity-70 text-sm">@johndoe</p>
        </div>
      </div>
      <p className="text-white mb-4">{content}</p>
      {image && (
        <img src={image} alt="Post" className="w-full h-auto rounded-lg mb-4" />
      )}
      <div className="flex space-x-4">
        <button className="text-white opacity-70 hover:opacity-100 transition duration-300">
          Like
        </button>
        <button className="text-white opacity-70 hover:opacity-100 transition duration-300">
          Comment
        </button>
        <button className="text-white opacity-70 hover:opacity-100 transition duration-300">
          Share
        </button>
      </div>
    </div>
  );
};

export default PostItem;

