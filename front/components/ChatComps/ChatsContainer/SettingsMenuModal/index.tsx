import React from 'react';
import Modal from '@components/Modal';
import { ModalContent } from '@components/Header/Modals/ContinueMessageModal';
import MenuModalItem from '@components/MenuModalItem';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}
const SettingsMenuModal = ({ show, onCloseModal }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent>
        <MenuModalItem url={'/'} title={'설정1'} />
        <MenuModalItem url={'/'} title={'설정2'} />
        <MenuModalItem url={'/'} title={'설정3'} />
        <MenuModalItem url={'/'} title={'설정4'} />
      </ModalContent>
    </Modal>
  );
};

export default SettingsMenuModal;
