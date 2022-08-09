import React from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

export const ModalContent = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  align-items: center;

  > .header {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1.title {
      font-size: 22px;
    }

    > .sub-title {
      font-size: 14px;
      color: gray;
      margin-top: 10px;
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
    }
  }
`;

const ContinueMessageModal = ({ show, onCloseModal }: IProps) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent>
        <div className={'header'}>
          <h1 className={'title'}>작성 중</h1>
          <span className={'sub-title'}>작성 중인 글이 존재합니다. 계속 진행하시겠습니가?</span>
        </div>
        <div className={'buttons'}>
          <button>예</button>
          <button>아니요</button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ContinueMessageModal;
