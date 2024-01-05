// src/hooks/useMarkdownPosts.js
import { useState, useEffect } from 'react';
import { markdownToHtml } from '../utils/markdownToHtml';

function useMarkdownPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = () => {
      const context = require.context('../blog-posts', true, /\.md$/);
      const markdownFiles = context.keys();

      const postsPromises = markdownFiles.map((filename) => {
        const path = context(filename).default;
        return fetch(path)
          .then((res) => res.text())
          .then((markdown) => markdownToHtml(markdown));
      });

      Promise.all(postsPromises).then(setPosts);
    };

    loadPosts();
  }, []);

  return posts;
}

export default useMarkdownPosts;
