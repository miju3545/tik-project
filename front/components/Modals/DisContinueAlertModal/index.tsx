import React from 'react';
import Modal from '@components/Modal';
import { ModalContent } from '@components/Header/Modals/ContinueMessageModal';
import AlertModal from '@components/AlertModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  onDelete: () => void;
}

const DisContinueAlertModal = ({ show, onCloseModal, onDelete }: IProps) => {
  return (
    <AlertModal
      title={'게시물을 삭제하시겠어요?'}
      subTitle={'지금 나가면 수정 내용이 저장되지 않습니다.'}
      show={show}
      onCloseModal={onCloseModal}
    >
      <button onClick={onCloseModal} style={{ color: '#000' }}>
        취소
      </button>
      <button onClick={onDelete} style={{ color: 'red' }}>
        삭제
      </button>
    </AlertModal>
  );
};

export default DisContinueAlertModal;
