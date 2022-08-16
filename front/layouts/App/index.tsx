import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@themes/themes';

const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Profile = loadable(() => import('@pages/Profile'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={'/sign_in'} component={SignIn} />
          <Route path={'/sign_up'} component={SignUp} />
          <Route path={`/profile/:nickname`} component={Profile} />
          <Route path={'/*'} component={Workspace} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
