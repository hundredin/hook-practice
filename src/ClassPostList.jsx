import React from "react";
import ClassPostDetail from "./ClassPostDetail";

class ClassPostList extends React.Component {
  state = {
    postId: -1,
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ posts: json.splice(0, 20) });
      });
  }

  handleClick = (postId) => () => {
    this.setState({ postId });
  };

  render() {
    return (
      <div>
        <h1>Class Component - PostList</h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>
              {post.id} - {post.title}
              <button onClick={this.handleClick(post.id)}>show</button>
            </li>
          ))}
        </ul>
        <ClassPostDetail postId={this.state.postId} />
      </div>
    );
  }
}

export default ClassPostList;
