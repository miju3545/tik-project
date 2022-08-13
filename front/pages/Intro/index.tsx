import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

export const Base = styled.div``;

const Intro = () => {
  return (
    <Base>
      <Switch>
        <Route path={'/sign_in'} component={SignIn} />
        <Route path={'/sign_up'} component={SignUp} />
      </Switch>
    </Base>
  );
};

export default Intro;
