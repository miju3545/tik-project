import React from 'react';
import AlarmModal from '@components/AlarmModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

const SignUpSuccessModal = ({ show, onCloseModal }: IProps) => {
  return (
    <AlarmModal title={'가입을 축하합니다'} subTitle={'바로 로그인하시겠어요?'} show={show} onCloseModal={onCloseModal}>
      <button onClick={onCloseModal} className={'refuse'}>
        아니요
      </button>
      <button onClick={onCloseModal} className={'accept'}>
        네
      </button>
    </AlarmModal>
  );
};
export default SignUpSuccessModal;
