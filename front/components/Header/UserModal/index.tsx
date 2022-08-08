import React, { FC, useCallback, useState } from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';
import MenuItem from '@components/Header/MenuItem';
import { FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import { IoLogOut, IoSettings } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import { MdNightlight, MdEmojiEmotions } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

import ModalContent, { Main } from '@components/Header/ModalContent';
import { useTheme } from '@emotion/react';
import axios from 'axios';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IState {
  [key: string]: any;
}
export const ProfileInfo = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 12px;

  > #profile-itself {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    transition: 0.2s;

    > .avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: gray;
    }

    > .detail {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      > .nickname {
        font-size: 16px;
        font-weight: 800;
      }
      > .state {
        font-size: 14px;
      }
    }
  }

  > .divider {
    width: 100%;
    display: block;
    border-top: 1px solid #dfdfdf;
    margin: 5px 0;
  }

  > #profile-itself:hover {
    background-color: rgb(239, 239, 239);
  }
`;

export const MenuUl = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > .prev-button {
    font-size: 24px;
    cursor: pointer;
  }
  > h1 {
    font-size: 22px;
    font-weight: 700;
    margin-left: 12px;
  }
`;

const BlueTextButton = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;
  color: #0e73cc;

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;
const UserModal: FC<IProps> = ({ show, onCloseModal }) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com', state: true };
  const [showModal, setShowModal] = useState<IState>({ showAllProfileModal: false });
  const onClickModal = useCallback((modalName: string) => {
    setShowModal((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  const onLogout = useCallback(() => {
    axios
      .post('/api/user/logout')
      .then((res) => {
        console.log('logout success');
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent style={{ width: '320px' }}>
        {showModal.showAllProfileModal ? (
          <>
            <Header>
              <span className={'prev-button'} onClick={() => onClickModal('showAllProfileModal')}>
                <FiArrowLeft />
              </span>
              <h1>프로필 선택</h1>
            </Header>
            <MenuUl>
              {[
                { id: 1, nickname: 'example' },
                { id: 2, nickname: 'example2' },
              ].map((profile) => (
                <MenuItem key={profile.id} url="/" icon={<FaUser />} title={profile.nickname} />
              ))}
              <BlueTextButton>프로필 추가하기</BlueTextButton>
            </MenuUl>
          </>
        ) : (
          <>
            <ProfileInfo>
              <div id={'profile-itself'}>
                <div className={'avatar'} />
                <div className={'detail'}>
                  <span className={'nickname'}>{userData.nickname}</span>
                  <span className={'state'}>{userData.state ? '사용 중' : '자리비움'}</span>
                </div>
              </div>
              <span className={'divider'} />
              <BlueTextButton onClick={() => onClickModal('showAllProfileModal')}>프로필 모두 보기</BlueTextButton>
            </ProfileInfo>
            <MenuUl>
              <MenuItem url="/" icon={<MdEmojiEmotions />} title={'상태 변화'} />
              <MenuItem url="/" icon={<IoSettings />} title={'설정 및 개인정보'} />
              <MenuItem url="/" icon={<FaQuestionCircle />} title={'도움말 및 지원'} />
              <MenuItem url="/" icon={<MdNightlight />} title={'디스플레이 및 접근성'} />
              <MenuItem url="/" icon={<FaExclamationCircle />} title={'의견 보내기'} />
              <MenuItem icon={<IoLogOut />} title={'로그아웃'} onClick={onLogout} />
            </MenuUl>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
