import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import ChatsMenu from '@components/ChatComps/ChatsMenu';
import ChatsContainer from '@components/ChatComps/ChatsContainer';
import LeftSideMenu from '@components/ChatComps/LeftSideMenu';
import { useParams } from 'react-router-dom';
import useSocket from '@hooks/useSocket';

export const Base = styled.div``;
export const Container = styled.div`
  position: absolute;
  top: 56px;
  width: 100vw;
  height: calc(100vh - 56px);
  overflow: hidden;
`;

const Dm = () => {
  const { club } = useParams<{ club: string }>();
  const userData = { id: 1, nickname: 'example' };
  const clubsData = [{ id: 1, name: 'genxx' }];
  const [socket, disconnect] = useSocket(club);
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({ showSideMenu: true });
  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  useEffect(() => {
    if (clubsData && userData && socket) {
      socket.emit('login', { id: userData.id, clubs: clubsData.map((v) => v.id) });
    }
  }, [clubsData, userData, socket]);

  useEffect(() => {
    return () => disconnect();
  }, [club, disconnect]);

  return (
    <Base>
      <Header />
      <Container>
        <ChatsMenu />
        <ChatsContainer show={showModals.showSideMenu} showSideMenu={() => handleModal('showSideMenu')} />
        <LeftSideMenu show={showModals.showSideMenu} onCloseModal={() => handleModal('showSideMenu')} />
      </Container>
    </Base>
  );
};

export default Dm;
