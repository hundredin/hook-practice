import React, { useState, useEffect } from "react";

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then((json) => {
          setPost(json);
        });
    };

    fetchData();
  }, [postId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
};

export default PostDetail;
