import React, { useState } from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}
export const ModalContent = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: #000;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
`;

const MentionMessageModal = ({ show, onCloseModal }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal} style={{ backgroundColor: 'transparent' }}>
      <ModalContent>사람/장소를 태그하려면 사진을 클릭하세요</ModalContent>
    </Modal>
  );
};

export default MentionMessageModal;
