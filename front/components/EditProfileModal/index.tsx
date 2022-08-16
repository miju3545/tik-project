import React, { useState } from 'react';
import Modal from '@components/Modal';
import ModalContent from '@components/Header/ModalContent';
import UserInfoHeader from '@components/Header/Modals/CreatePostModal/UserInfoHeader';
import { useForm } from 'react-hook-form';
import { Button, Form, FormContainer, InputBox } from '@components/Header/Modals/CreatePostModal/style';
import TextArea from '@components/TextArea';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IForm {
  isPublic: boolean;
  content: string;
}
const EditProfileModal = ({ show, onCloseModal }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent title={'프로필 편집'} show={show} onCloseModal={onCloseModal} style={{ width: '720px' }}>
        {/*<UserInfoHeader register={register('isPublic')} isValue={Boolean(inputValues.isPublic)} />*/}
        {/*<FormContainer>*/}
        {/*  <Form>*/}
        {/*    <InputBox>*/}
        {/*      <TextArea*/}
        {/*        register={register('content')}*/}
        {/*        isValue={Boolean(inputValues.content)}*/}
        {/*        placeholder={`${userData.nickname}님, 지금 생각나는 것을 메모해 보세요.`}*/}
        {/*      />*/}
        {/*    </InputBox>*/}
        {/*    <Button disabled={!inputValues.content}>작성하기</Button>*/}
        {/*  </Form>*/}
        {/*</FormContainer>*/}
        <div>프로필 편집 form</div>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
