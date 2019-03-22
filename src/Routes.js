import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Login from './page/LoginPage';
import HomePage from './page/HomePage';
import SeeAllAvailable from './page/SeeAllAvailable';
import BookSpecificTable from './page/BookSpecificTable';

const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route  exact path="/home-page" component={HomePage}/>
          <Route  exact path="/home-page/see-all-available" component={SeeAllAvailable}/>
          <Route  exact path="/home-page/book-specific-table" component={BookSpecificTable}/>

      </Switch>
  </BrowserRouter>
);

export default Routes;