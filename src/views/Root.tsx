import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { store } from 'state';
import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';

const Root = (): JSX.Element => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/react-todo-app" component={HomePage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  </>
);

export default Root;
