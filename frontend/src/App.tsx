import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export interface Post {
  content: string;
  image: string | null;
}


const App: React.FC = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <Header connected={connected} setConnected={setConnected} />
      <div className="container mx-auto px-4 py-8">
        {connected ? (
          <>
            <Profile />
            <PostForm addPost={addPost} />
            <PostList posts={posts} />
          </>
        ) : (
          <div className="text-center text-white text-2xl mt-20">
            Please connect your wallet to access the platform.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
