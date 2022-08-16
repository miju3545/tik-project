import React, { VFC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Base, LeftMenu, Main, RightMenu } from '@layouts/Workspace/style';
import Header from '@components/Header';
import { useLocation } from 'react-router';
import Navigation from '@components/Navigation';
import loadable from '@loadable/component';

const Home = loadable(() => import('@pages/Home'));
const Friends = loadable(() => import('@pages/Friends'));
const Groups = loadable(() => import('@pages/Groups'));
const Memos = loadable(() => import('@pages/Memos'));

const Workspace: VFC = () => {
  return (
    <Base>
      <Header />
      <div id={'main-container'}>
        <LeftMenu>
          <Navigation />
        </LeftMenu>
        <Main>
          <Switch>
            <Route path={'/browse/clubs'} component={Home} />
            <Route path={'/:nickname/friends'} component={Friends} />
            <Route path={'/:nickname/groups'} component={Groups} />
            <Route path={'/:nickname/memos'} component={Memos} />
            <Route path={'/:nickname/clubs'} component={Memos} />
            <Route path={'/'} component={Home} />
          </Switch>
        </Main>
        <RightMenu>오른쪽 메뉴</RightMenu>
      </div>
    </Base>
  );
};

export default Workspace;
