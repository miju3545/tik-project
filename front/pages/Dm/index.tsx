import React from 'react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import ChatsMenu from '@components/ChatComps/ChatMenu';
import ChatsContainer from '@components/ChatComps/ChatsContainer';
import SearchChatForm from '@components/ChatComps/ChatMenu/SearchChatForm';

export const Base = styled.div``;
export const Container = styled.div`
  position: fixed;
  top: 56px;
  width: 100%;
  height: calc(100vh - 56px);
`;

const Dm = () => {
  return (
    <Base>
      <Header />
      <Container>
        <ChatsMenu />
        <SearchChatForm />
        <ChatsContainer />
      </Container>
    </Base>
  );
};

export default Dm;
