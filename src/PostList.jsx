import React, { useState, useEffect } from "react";

const PostList = () => {
  const [postId, setPostId] = useState(-1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.splice(0, 20));
      });
  }, []);

  const handleClick = (postId) => () => {
    console.log(postId);
    setPostId(postId);
  };

  return (
    <div>
      <h1>Functional Component - PostList</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id} - {post.title}
            <button onClick={handleClick(post.id)}>show</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
