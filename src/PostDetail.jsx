import React, { useState, useEffect, useCallback } from "react";

// 1. 함수를 컴포넌트 외부로 끌어올려 두거나
const getUrl = (postId) => {
  return `https://jsonplaceholder.typicode.com/posts/${postId}`;
};

const PostDetail = ({ postId }) => {
  const [post, setPost] = useState({});

  // 2. useCallback 을 사용한다.
  // const getUrl = useCallback(() => {
  //   return `https://jsonplaceholder.typicode.com/posts/${postId}`;
  // }, [postId]);

  useEffect(() => {
    const fetchData = () => {
      fetch(getUrl(postId))
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
