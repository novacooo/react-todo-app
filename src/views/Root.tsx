import React from 'react';
import { Switch, Route, HashRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { store } from 'state';
import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';
import { routes } from 'routes';
import LoginPage from './LoginPage';
import DeadlinePage from './DeadlinePage';
import DonePage from './DonePage';
import TopBar from 'components/organisms/TopBar/TopBar';

const Content = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== routes.login && <TopBar />}
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.deadline} component={DeadlinePage} />
        <Route exact path={routes.done} component={DonePage} />
      </Switch>
    </>
  );
};

const Root = (): JSX.Element => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Provider store={store}>
      <HashRouter basename="/">
        <MainTemplate>
          <Content />
        </MainTemplate>
      </HashRouter>
    </Provider>
  </>
);

export default Root;
