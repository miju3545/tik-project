import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import ChatsMenu from '@components/ChatRelatedComponents/ChatsMenu';
import ChatsContainer from '@components/ChatRelatedComponents/ChatsContainer';
import LeftSideMenu from '@components/ChatRelatedComponents/LeftSideMenu';
import { useParams } from 'react-router-dom';
import useSocket from '@hooks/useSocket';
import { IDM } from '@typings/db';
import makeDateSection from '@utils/makeDateSection';

export const Base = styled.div``;
export const Container = styled.div`
  position: absolute;
  top: 56px;
  width: 100vw;
  height: calc(100vh - 56px);
  overflow: hidden;
`;

const Dm = () => {
  const { club, id } = useParams<{ club: string; id: string }>();
  const userData = { id: 1, nickname: 'example' };
  const clubsData = [{ id: 1, name: 'genxx' }];
  const [socket, disconnect] = useSocket(club);
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({ showRightSideMenu: false });
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
        <ChatsContainer show={showModals.showRightSideMenu} showSideMenu={() => handleModal('showRightSideMenu')} />
        <LeftSideMenu show={showModals.showRightSideMenu} onCloseModal={() => handleModal('showRightSideMenu')} />
      </Container>
    </Base>
  );
};

export default Dm;
