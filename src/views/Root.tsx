import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { store } from 'state';
import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';
import { routes } from 'routes';
import LoginPage from './LoginPage';

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
      <HashRouter basename="/">
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.login} component={LoginPage} />
          </Switch>
        </MainTemplate>
      </HashRouter>
    </Provider>
  </>
);

export default Root;
