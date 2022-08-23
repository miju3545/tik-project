import React, { createContext, useCallback, useState, VFC } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Base, LeftMenu, Main, RightMenu } from '@layouts/Workspace/style';
import Header from '@components/Header';
import { useLocation } from 'react-router';
import Navigation from '@components/Navigation';
import loadable from '@loadable/component';
import DragOver from '@components/ChatRelatedComponents/ChatsContainer/DragOver';
import BookMarkDragAndDrop from '@components/BookMarkDragAndDrop';

const Home = loadable(() => import('@pages/Home'));
const Friends = loadable(() => import('@pages/Friends'));
const Groups = loadable(() => import('@pages/Groups'));
const Memos = loadable(() => import('@pages/Memos'));

export interface IDragContext {
  dragOver: boolean;
  onDragOver: (e: any) => void;
  onDrop: (e: any) => void;
}

export const DragContext = createContext<IDragContext | null>(null);
const Workspace: VFC = () => {
  const [dragOver, setDragOver] = useState(false);

  const onDragOver = useCallback((e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  }, []);

  const onDrop = useCallback((e: any) => {
    e.preventDefault();
    console.log(e);
    setDragOver(false);
  }, []);

  const context = {
    dragOver,
    onDragOver,
    onDrop,
  };

  return (
    <Base>
      <Header />
      <div id={'main-container'}>
        <LeftMenu>
          <Navigation OnDrop={onDrop} OnDragOver={onDragOver} />
        </LeftMenu>
        <Main>
          <DragContext.Provider value={context}>
            <Switch>
              <Route path={'/browse/clubs'} component={Home} />
              <Route path={'/:nickname/friends'} component={Friends} />
              <Route path={'/:nickname/groups'} component={Groups} />
              <Route path={'/:nickname/memos'} component={Memos} />
              <Route path={'/:nickname/clubs'} component={Memos} />
            </Switch>
          </DragContext.Provider>
          {dragOver && <BookMarkDragAndDrop item={'북마크에 추가'} />}
        </Main>
        <RightMenu>오른쪽 메뉴</RightMenu>
      </div>
    </Base>
  );
};

export default Workspace;
