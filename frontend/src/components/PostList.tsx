import React from 'react';
import PostItem from './PostItem';


export interface Post {
    content: string;
    image: string | null;
  }
  
  

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <PostItem key={index} content={post.content} image={post.image} />
      ))}
    </div>
  );
};

export default PostList;
