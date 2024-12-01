import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface PostProps {
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  image: string | null;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({
  author,
  content,
  image,
  likes,
  comments,
  shares,
  timestamp
}) => {
  return (
    <article className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={author.avatar}
          alt={`${author.name}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-white">{author.name}</h3>
          <p className="text-white text-opacity-70 text-sm">@{author.username}</p>
        </div>
        <span className="ml-auto text-white text-opacity-50 text-sm">{timestamp}</span>
      </div>
      <p className="text-white mb-4">{content}</p>
      {image && (
        <img 
          src={image} 
          alt="Post content" 
          className="w-full h-auto rounded-lg mb-4 object-cover"
        />
      )}
      <div className="flex justify-between items-center text-white text-opacity-70">
        <button className="flex items-center hover:text-pink-400 transition-colors duration-200" aria-label={`Like. Current likes: ${likes}`}>
          <Heart className="w-5 h-5 mr-1" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center hover:text-blue-400 transition-colors duration-200" aria-label={`Comment. Current comments: ${comments}`}>
          <MessageCircle className="w-5 h-5 mr-1" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center hover:text-green-400 transition-colors duration-200" aria-label={`Share. Current shares: ${shares}`}>
          <Share2 className="w-5 h-5 mr-1" />
          <span>{shares}</span>
        </button>
      </div>
    </article>
  );
};

export default Post;
