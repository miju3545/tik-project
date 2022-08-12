import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  return (
    <ThemeProvider theme={theme}>
      <Base>
        {!['/sign_in', '/sign_up', '/'].includes(pathname) && <Header />}
        <div className={'container'}>
          {!['/sign_in', '/sign_up', '/'].includes(pathname) && (
            <div>
              <Navigation />
            </div>
          )}
          <Main>{children}</Main>
          <div>...</div>
        </div>
      </Base>
    </ThemeProvider>
  );
};

export default Workspace;
