import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     posts: []
    }
  }

  async componentDidMount() {
    try {
      const posts = await strapi.getEntries('posts')
      this.setState({ posts });
    } 
    catch(err) {
      alert(err);
    }
  }

  render() {
    return (
      <section>
        {this.state.posts.map(post => (
          <article>
           <div>Title: {post.title}</div>
           <div>Content: {post.content}</div></article>
        ))}
      </section>
    )
  }
}

export default LandingContainer;