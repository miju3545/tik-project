import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Workspace from '@layouts/Workspace';
import loadable from '@loadable/component';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@themes/themes';
import { Base, Main } from '@layouts/Workspace/style';
import Header from '@components/Header';
import Navigation from '@components/Navigation';

const Home = loadable(() => import('@pages/Home'));
const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Profile = loadable(() => import('@pages/Profile'));
const Friends = loadable(() => import('@pages/Friends'));
const Groups = loadable(() => import('@pages/Groups'));
const Memos = loadable(() => import('@pages/Memos'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Workspace>
          <Switch>
            <Route path={'/sign_in'} component={SignIn} />
            <Route path={'/sign_up'} component={SignUp} />
            <Route path={'/friends'} component={Home} />
            <Route path={'/browse/clubs'} component={Home} />
            <Route path={`/:nickname/friends`} component={Friends} />
            <Route path={`/:nickname/groups`} component={Groups} />
            <Route path={`/:nickname/memos`} component={Memos} />
            <Route path={`/:nickname`} component={Profile} />
          </Switch>
        </Workspace>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
