import React from "react";

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
    console.log(postId);
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
      </div>
    );
  }
}

export default ClassPostList;
