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

export const SideMenu = styled.div`
  position: fixed;
  right: 50px;
  top: 100px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
`;
const MenuModal: FC<IProps> = ({ show, onCloseModal }) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent title={'메뉴'} style={{ minHeight: '800px' }}>
        <SideMenu>
          <Header>
            <h2>만들기</h2>
          </Header>
          <ul>
            <MenuItem url="/" icon={<BsPencilSquare />} title={'게시물'} />
            <MenuItem url="/" icon={<RiBookOpenFill />} title={'스토리'} />
            <MenuItem url="/" icon={<BsCameraVideoFill />} title={'룸스'} />
          </ul>
        </SideMenu>
      </ModalContent>
    </Modal>
  );
};

export default MenuModal;
