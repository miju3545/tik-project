import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import ChatsMenu from '@components/ChatComps/ChatsMenu';
import ChatsContainer from '@components/ChatComps/ChatsContainer';
import LeftSideMenu from '@components/ChatComps/LeftSideMenu';
import { useParams } from 'react-router-dom';

export const Base = styled.div``;
export const Container = styled.div`
  position: absolute;
  top: 56px;
  width: 100vw;
  height: calc(100vh - 56px);
  overflow: hidden;
`;

const Dm = () => {
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({ showSideMenu: true });
  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

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
