// src/pages/Blog/BlogPage.jsx
import React from 'react';
import useMarkdownPosts from '../../hooks/useMarkdownPosts';

function BlogPage() {
  const posts = useMarkdownPosts();

  return (
    <div>
      {posts.map((postHtml, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: postHtml }} />
      ))}
    </div>
  );
}

export default BlogPage;
