import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LandingContainer from './pages/index';
import CategoryContainer from './templates/category';
import ArticleContainer from './templates/article';
import AuthorContainer from './templates/author';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/category/:categoryId" component={CategoryContainer} />
        <Route exact path="/article/:articleId" component={ArticleContainer} />
        <Route exact path="/author/:authorId" component={AuthorContainer} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;