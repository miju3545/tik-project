import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { ModalContent } from '@components/Header/Modals/ContinueMessageModal';

interface IProps {
  title: string;
  subTitle: string;
  show: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

const AlertModal = ({ title, subTitle, show, onCloseModal, children }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent>
        <div className={'header'}>
          <h1 className={'title'}>{title}</h1>
          <span className={'sub-title'}>{subTitle}</span>
        </div>
        <div className={'buttons'}>{children}</div>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
