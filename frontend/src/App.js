import React from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

class App extends React.Component {
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

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
