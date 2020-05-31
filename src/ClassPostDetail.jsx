import React from "react";

class ClassPostDetail extends React.Component {
  state = {
    post: {},
  };

  fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ post: json });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.postId !== this.props.postId) {
      this.fetchData();
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
