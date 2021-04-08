import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import LandingContainer from './pages/index';
import CategoryContainer from './templates/category';
import ArticleContainer from './templates/article';
import AuthorContainer from './templates/author';

import StaffListingContainer from './templates/staff';
import JoinUsContainer from './templates/join';
import WriteForUsContainer from './templates/write';
import SubscribeContainer from './templates/subscribe';
import ResourcesContainer from './templates/resources';
import ContactContainer from './pages/contact';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/category/:categoryId" component={CategoryContainer} />
        <Route exact path="/article/:articleId" component={ArticleContainer} />
        <Route exact path="/author/:authorId" component={AuthorContainer} />
        <Route exact path="/staff-listing" component={StaffListingContainer} />
        <Route exact path="/join-us" component={JoinUsContainer} />
        <Route exact path="/write-for-us" component={WriteForUsContainer} />
        <Route exact path="/donate-and-subscribe" component={SubscribeContainer} />
        <Route exact path="/writing-resources" component={ResourcesContainer} />
        <Route exact path="/contact" component={ContactContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
)

export default App;