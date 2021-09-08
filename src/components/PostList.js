import React from "react";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    console.log(this.props.fetchPosts);
  }
  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
