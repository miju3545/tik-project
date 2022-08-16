import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@themes/themes';
import ErrorBoundary from '@components/ErrorBoundary';

const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Profile = loadable(() => import('@pages/Profile'));
const Dm = loadable(() => import('@pages/Dm'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path={'/sign_in'} component={SignIn} />
            <Route path={'/sign_up'} component={SignUp} />
            <Route path={`/profile/:nickname`} component={Profile} />
            <Route path={'/dm'} component={Dm} />
            <Route path={'/'} component={Workspace} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
