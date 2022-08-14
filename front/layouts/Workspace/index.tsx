import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Base, Main } from '@layouts/Workspace/style';
import Header from '@components/Header';
import { ThemeContext, ThemeProvider } from '@emotion/react';
import { theme } from '@themes/themes';
import { useLocation } from 'react-router';
import Navigation from '@components/Navigation';

interface IProps {
  children: React.ReactNode;
}

const Workspace: FC<IProps> = ({ children }) => {
  const { pathname } = useLocation();
  console.log(useRouteMatch());
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Header />
        <div className={'container'}>
          <div>
            <Navigation />
          </div>
          <Main>{children}</Main>
          <div>...</div>
        </div>
      </Base>
    </ThemeProvider>
  );
};

export default Workspace;
