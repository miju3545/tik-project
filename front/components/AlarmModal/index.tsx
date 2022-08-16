import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import { ModalContent } from '@components/Header/Modals/ContinueMessageModal';

interface IProps {
  title: string;
  subTitle: string;
  show: boolean;
  onCloseModal: () => void;
  [key: string]: any;
  children: React.ReactNode;
}

const AlarmModal = ({ title, subTitle, show, onCloseModal, reset, setShowModal, children }: IProps) => {
  const onCloseModalWithNewStart = useCallback(() => {
    onCloseModal();
    reset();
    setShowModal({
      showDefaultScreen: true,
      showImageOrVideoDropper: false,
      showImageOrVideoPreviewDropper: false,
      showEditImageOrVideoDropper: false,
      showLocationDropper: false,
      showMentionDropper: false,
      showContinueMessageModal: false,
      isImageOrVideoSelected: false,
      isMentionSelected: false,
      isLocationSelected: true,
    });
  }, []);

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

export default AlarmModal;
