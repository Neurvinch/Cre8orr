import React, { useState } from 'react';

export interface Post {
    content: string;
    image: string | null;
  }
  
  

interface PostFormProps {
  addPost: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost }) => {
  const [content, setContent] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  const generateAICaption = (): string => {
    // Simulating AI caption generation
    const captions = [
      "Embracing the future of Web3! 🚀",
      "Decentralized dreams becoming reality. 💡",
      "Building the next generation of the internet. 🌐",
      "Blockchain technology is reshaping our world. ⛓️",
      "Empowering individuals through decentralization. 💪"
    ];
    return captions[Math.floor(Math.random() * captions.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({ content, image: image ? URL.createObjectURL(image) : null });
      setContent('');
      setImage(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full bg-transparent text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        rows={4}
      ></textarea>
      <div className="flex items-center justify-between">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer bg-white bg-opacity-20 text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-30 transition duration-300"
          >
            Add Image
          </label>
          {image && <span className="ml-2 text-white">Image selected</span>}
        </div>
        <div>
          <button
            type="button"
            onClick={() => setContent(generateAICaption())}
            className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold mr-2 hover:bg-purple-600 transition duration-300"
          >
            AI Caption
          </button>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;

