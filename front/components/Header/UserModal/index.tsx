import React, { FC, useCallback, useState } from 'react';
import Menu from '@components/Menu';
import styled from '@emotion/styled';
import MenuItem from '@components/Header/MenuItem';
import { FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import { IoLogOut, IoSettings } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi';
import { MdNightlight, MdEmojiEmotions } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import MenuContent from '@components/Header/MenuContent';
import axios from 'axios';
import { Header, ProfileInfo, MenuUl, BlueTextButton } from '@components/Header/UserModal/style';
import { Redirect, useHistory } from 'react-router-dom';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

const UserModal: FC<IProps> = ({ show, onCloseModal }) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com', state: true };
  const [showModal, setShowModal] = useState<{ [key: string]: any }>({ showAllProfileModal: false });
  const onClickModal = useCallback((modalName: string) => {
    setShowModal((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);
  const history = useHistory();

  const onLogout = useCallback(() => {
    axios
      .post('/api/user/logout')
      .then((res) => {
        console.log('logout success');
        history.push('/sign_in');
      })
      .catch((error) => console.error(error));
  }, []);

  // if (false) {
  //   return <Redirect to={'/sign_in'} />;
  // }

  return (
    <Menu show={show} onCloseModal={onCloseModal}>
      <MenuContent style={{ width: '320px' }}>
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
      </MenuContent>
    </Menu>
  );
};

export default UserModal;
