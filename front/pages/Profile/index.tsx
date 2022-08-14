import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import { useTheme } from '@emotion/react';
import Button from '@components/ProfilePageComps/Button';
import { IoAddCircleSharp } from 'react-icons/io5';
import { FaPen } from 'react-icons/fa';
import EditProfileModal from '@components/EditProfileModal';

export const Base = styled.div`
  width: 100vw;
`;

export const Main = styled.main`
  min-height: 10000px;
  position: absolute;
  background-color: #f0f2f6;
  top: 58px;
  left: 0;
  right: 0;
  padding: 0 20px;
`;

const Profile = () => {
  const theme = useTheme();
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({
    showEditProfileModal: false,
  });

  const modalHandler = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  return (
    <Base theme={theme}>
      <Header />
      <Main>
        <Button
          icon={<IoAddCircleSharp />}
          title={'스토리에 추가'}
          style={{ backgroundColor: '#1974e4', color: '#fff' }}
          onClick={() => console.log('xxxx')}
        />
        <Button icon={<FaPen />} title={'프로필 편집'} onClick={() => modalHandler('showEditProfileModal')} />
      </Main>
      <EditProfileModal
        show={showModals.showEditProfileModal}
        onCloseModal={() => modalHandler('showEditProfileModal')}
      />
    </Base>
  );
};

export default Profile;
