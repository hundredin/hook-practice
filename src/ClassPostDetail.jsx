import React from "react";

class ClassPostDetail extends React.Component {
  state = {
    post: {},
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ post: json });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postId !== this.props.postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
        .then((response) => response.json())
        .then((json) => {
          this.setState({ post: json });
        });
    }
  }

  render() {
    const { title, body } = this.state.post;
    return (
      <div>
        <h2>{title}</h2>
        <div>{body}</div>
      </div>
    );
  }
}

export default ClassPostDetail;
