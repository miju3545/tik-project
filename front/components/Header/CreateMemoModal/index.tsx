import React from 'react';
import Modal from '@components/Modal';
import ModalContent from '@components/Header/ModalContent';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

const CreateMemoModal = ({ show, onCloseModal }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent title={'메모하기'} show={show} onCloseModal={onCloseModal}>
        ......
      </ModalContent>
    </Modal>
  );
};

export default CreateMemoModal;
