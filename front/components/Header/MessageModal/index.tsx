import React, { FC } from 'react';
import Menu from '@components/Menu';

import MenuContent from '@components/Header/MenuContent';
import { Header, Main } from '@components/Header/MenuContent/style';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

const MessageModal: FC<IProps> = ({ show, onCloseModal }) => {
  return (
    <Menu show={show} onCloseModal={onCloseModal}>
      <MenuContent title={'채팅'} style={{ minHeight: '800px' }}>
        ... 소켓 사용 예정
      </MenuContent>
    </Menu>
  );
};

export default MessageModal;
