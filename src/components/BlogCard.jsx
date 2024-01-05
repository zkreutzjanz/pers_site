// src/components/BlogCard/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ id, title, date, summary, imageUrl }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={imageUrl} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{summary}</p>
          <p className="mt-2 text-gray-500">{date}</p>
          <Link to={`/blog/${id}`} className="mt-4 block text-indigo-700 hover:text-indigo-600 font-semibold">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
