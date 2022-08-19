import React, { useState } from 'react';
import Modal from '@components/Modal';
import ModalContent from '@components/Header/ModalContent';
import UserInfoHeader from '@components/Header/Modals/CreatePostModal/UserInfoHeader';
import { useForm } from 'react-hook-form';
import { Button, Form, FormContainer, InputBox } from '@components/Header/Modals/CreatePostModal/style';
import TextArea from '@components/Inputs/TextArea';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IForm {
  isPublic: boolean;
  content: string;
}
const CreateMemoModal = ({ show, onCloseModal }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  const [showModal, setShowModal] = useState<{ [key: string]: any }>({});
  const { register, handleSubmit, watch, reset } = useForm<IForm>({
    defaultValues: { isPublic: true, content: '' },
    mode: 'onChange',
  });
  const inputValues = watch();

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <ModalContent title={'메모하기'} show={show} onCloseModal={onCloseModal}>
        <UserInfoHeader register={register('isPublic')} isValue={Boolean(inputValues.isPublic)} />
        <FormContainer>
          <Form>
            <InputBox>
              <TextArea
                register={register('content')}
                isValue={Boolean(inputValues.content)}
                placeholder={`${userData.nickname}님, 지금 생각나는 것을 메모해 보세요.`}
              />
            </InputBox>
            <Button disabled={!inputValues.content}>작성하기</Button>
          </Form>
        </FormContainer>
      </ModalContent>
    </Modal>
  );
};

export default CreateMemoModal;
