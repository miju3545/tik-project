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
          <Route path={'/browse/clubs'} component={Home} />
          <Route path={'/'} component={Intro} />
        </Switch>
      </Workspace>
    </BrowserRouter>
  );
};

export default App;
