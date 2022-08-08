import React, { FC } from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';
import MenuItem from '@components/Header/MenuItem';
import { BsPencilSquare, BsCameraVideoFill } from 'react-icons/bs';
import { RiBookOpenFill } from 'react-icons/ri';

import ModalContent, { Header, Main } from '@components/Header/ModalContent';
interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

const MessageModal: FC<IProps> = ({ show, onCloseModal }) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent title={'채팅'} style={{ minHeight: '800px' }}>
        ....
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
