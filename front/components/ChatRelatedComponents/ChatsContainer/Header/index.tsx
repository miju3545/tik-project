import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiArrowLeftCircle } from 'react-icons/fi';
import SettingsMenuModal from '@components/ChatRelatedComponents/ChatsContainer/SettingsMenuModal';

interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

export const Base = styled.header<{ [key: string]: any }>`
  width: 100%;
  height: 62px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 16px;

  > a {
    display: block;
    padding: 5px;
    border-radius: 4px;
    transform: translateY(1px);
    transition: 0.2s;
    > .user-info {
      display: flex;
      align-items: center;
      > .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: gray;
      }
      > .nickname {
        margin-left: 10px;
        font-weight: 600;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

  > .side-buttons {
    display: flex;
    align-items: center;
    > button {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.gray[700]};
      margin-left: 5px;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray[100]};
      }
    }
  }
`;

const Header = ({ show, showSideMenu }: IProps) => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({ showSettingMenuModal: false });

  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  return (
    <Base theme={theme}>
      {id !== 'new' && (
        <Link to={`/profile/${id}`}>
          <div className={'user-info'}>
            <div className={'avatar'}></div>
            <div className={'nickname'}>{id}</div>
          </div>
        </Link>
      )}
      <div className={'side-buttons'}>
        <button onClick={() => handleModal('showSettingMenuModal')}>
          <BiDotsHorizontalRounded />
        </button>
        {!show && (
          <button onClick={showSideMenu}>
            <FiArrowLeftCircle />
          </button>
        )}
      </div>
      <SettingsMenuModal
        show={showModals.showSettingMenuModal}
        onCloseModal={() => handleModal('showSettingMenuModal')}
      />
    </Base>
  );
};

export default Header;
