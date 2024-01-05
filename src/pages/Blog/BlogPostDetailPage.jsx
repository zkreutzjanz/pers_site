// src/pages/BlogPostDetailPage/BlogPostDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../data/blogPosts'; // Adjust the import based on your data file's location

function BlogPostDetailPage() {
  let { postId } = useParams();
  const post = blogPosts.find((post) => post.id.toString() === postId);

  return (
    <div className="container mx-auto px-4 py-8">
      {post ? (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <img className="w-full mb-4" src={post.imageUrl} alt={post.title} />
          <p className="text-gray-700">{post.date}</p>
          <div className="mt-4 text-gray-600">{post.content}</div>
        </div>
      ) : (
        <p className="text-center text-red-500 text-xl">Post not found!</p>
      )}
    </div>
  );
}

export default BlogPostDetailPage;
