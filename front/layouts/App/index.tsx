import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Workspace from '@layouts/Workspace';
import loadable from '@loadable/component';

const Home = loadable(() => import('@pages/Home'));
const Intro = loadable(() => import('@pages/Intro'));

const App = () => {
  return (
    <BrowserRouter>
      <Workspace>
        <Switch>
          <Route path={'/groups'} component={Home} />
          <Route path={'/friends'} component={Home} />
          <Route path={'/sign_in'} component={Intro} />
          <Route path={'/sign_up'} component={Intro} />
          <Route path={'/'} component={Home} />
        </Switch>
      </Workspace>
    </BrowserRouter>
  );
};

export default App;
