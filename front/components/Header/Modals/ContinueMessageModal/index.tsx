import React, { useCallback } from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';
import AlarmModal from '@components/AlarmModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
  [key: string]: any;
}

export const ModalContent = styled.div`
  width: 400px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > .header {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1.title {
      font-size: 16px;
    }

    > .sub-title {
      font-size: 14px;
      color: gray;
      margin-top: 3px;
    }
  }
  > .buttons {
    display: flex;
    width: 100%;
    border-top: 1px solid #dfdfdf;

    > button {
      width: 100%;
      height: 50px;
      border: none;
      border-right: 1px solid #dfdfdf;
      font-weight: 600;
      cursor: pointer;
      background-color: #f0f2f6;
      transition: 0.2s;
      &:hover {
        background-color: #e4e6ea;
      }
    }

    > button.reject {
    }
    > button.accept {
      color: #1676f2;
    }
  }
`;

const ContinueMessageModal = ({ show, onCloseModal, reset, setShowModal }: IProps) => {
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
    <AlarmModal
      title={'작성중인 글이 있어요.'}
      subTitle={'이어서 작성하시겠어요?'}
      show={show}
      onCloseModal={onCloseModal}
    >
      <button onClick={onCloseModalWithNewStart} className={'denial'}>
        아니요, 새로 작성할래요.
      </button>
      <button onClick={onCloseModal} className={'accept'}>
        네, 이어서 작성할게요.
      </button>
    </AlarmModal>
  );
};

export default ContinueMessageModal;
