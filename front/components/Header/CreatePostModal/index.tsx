import React, { useCallback, useState } from 'react';
import Modal from '@components/Modal';
import styled from '@emotion/styled';
import ModalContent from '@components/Header/ModalContent';
import { useForm } from 'react-hook-form';
import { BsImages } from 'react-icons/bs';
import { FaUserTag } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import HoverLabel from '@components/HoverLabel';
import UserInfoHeader from '@components/Header/CreatePostModal/UserInfoHeader';
import ImageVideoDropper from '@components/Header/CreatePostModal/ImageVideoDropper';
import LocationDropper from '@components/Header/CreatePostModal/LocationDropper';
import MentionDropper from '@components/Header/CreatePostModal/MentionDropper';
import ContinueMessageModal from '@components/Header/ContinueMessageModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IForm {
  content: string;
  private: boolean;
  imageOrVideo: string;
  location: string;
  mention: string | null;
  hashtag: { content: string }[] | null;
}
export const FormContainer = styled.div`
  padding: 0 20px 20px;
  width: 100%;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > textarea {
    width: 100%;
    min-height: 120px;
    resize: unset;
    font-family: 'Poppins', sans-serif;
    font-size: 22px;
    border: none;
    &::placeholder {
      font-size: 22px;
    }

    &:focus {
      outline: none;
    }
  }

  > .dropper {
  }
`;

export const ToolBox = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  height: 70px;
  margin-top: 20px;

  > .title {
    font-weight: 600;
  }

  > ul {
    display: flex;
  }

  &:hover {
    border-color: darkgray;
  }
`;

export const ToolItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 3px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#a3bee1' : '#1676f2')};
  height: 38px;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
`;

const CreatePostModal = ({ show, onCloseModal }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: { content: '', private: false, imageOrVideo: '', location: 'Gangnam', hashtag: null, mention: null },
    mode: 'onChange',
  });

  const [showModal, setShowModal] = useState<{ [key: string]: any }>({
    showDefaultScreen: true,
    showImageOrVideoDropper: false,
    showLocationDropper: false,
    showMentionDropper: false,
    showContinueMessageDropper: true,
    isImageOrVideoSelected: false,
    isMentionSelected: false,
    isLocationSelected: true,
  });

  const { content, imageOrVideo, location, mention } = watch();

  const onClickOption = useCallback((optionItem: string) => {
    setShowModal((prev) => {
      let flag = 0;
      for (let v in prev) {
        if (v !== optionItem) {
          prev[v] = false;
        } else {
          prev[v] = !prev[v];
        }

        flag =
          ['showDefaultScreen', 'showLocationDropper', 'showMentionDropper'].includes(optionItem) && !prev[v] ? 1 : 0;
      }

      if (!flag) prev['showDefaultScreen'] = true;

      return { ...prev };
    });
  }, []);

  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
  }, []);

  return (
    <>
      <Modal show={true} onCloseModal={onCloseModal}>
        <ModalContent title={'게시물 만들기'} show={showModal.showDefaultScreen} onCloseModal={onCloseModal}>
          <UserInfoHeader />
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputBox>
                <textarea {...register('content')} placeholder={`${userData.nickname}님, 무슨 생각을 하고 계신가요?`} />
                <div className={'dropper'}>
                  <ImageVideoDropper
                    register={register('imageOrVideo')}
                    show={showModal.showImageOrVideoDropper}
                    onCloseModal={() => onClickOption('showImageOrVideoDropper')}
                  />
                </div>
              </InputBox>
              <ToolBox>
                <span className={'title'}>게시물에 추가</span>
                <ul>
                  <HoverLabel
                    label={'사진/동영상'}
                    style={{ top: '-38px' }}
                    onClick={() => onClickOption('showImageOrVideoDropper')}
                    children={
                      <ToolItem
                        style={{
                          color: '#44bd63',
                          backgroundColor: showModal.isImageOrVideoSelected || imageOrVideo ? '#e3f0d4' : 'transparent',
                        }}
                      >
                        <BsImages />
                      </ToolItem>
                    }
                  />
                  <HoverLabel
                    label={'사람 태그하기'}
                    style={{ top: '-38px' }}
                    onClick={() => onClickOption('showMentionDropper')}
                    children={
                      <ToolItem
                        style={{
                          color: '#1676f2',
                          backgroundColor: showModal.isMentionSelected || mention ? '#e6f3fe' : 'transparent',
                        }}
                      >
                        <FaUserTag />
                      </ToolItem>
                    }
                  />
                  <HoverLabel
                    label={'위치 공유하기'}
                    style={{ top: '-38px' }}
                    onClick={() => onClickOption('showLocationDropper')}
                    children={
                      <ToolItem
                        style={{
                          color: '#f5533d',
                          backgroundColor: showModal.isLocationSelected || location ? '#fcccd2' : 'transparent',
                        }}
                      >
                        <HiLocationMarker />
                      </ToolItem>
                    }
                  />
                </ul>
              </ToolBox>
              <Button disabled={!content}>공유하기</Button>
            </Form>
          </FormContainer>
        </ModalContent>
        <LocationDropper
          register={register('location')}
          show={showModal.showLocationDropper}
          onCloseModal={() => onClickOption('showDefaultScreen')}
          onClickOption={onClickOption}
        />
        <MentionDropper
          register={register('mention')}
          show={showModal.showMentionDropper}
          onCloseModal={() => onClickOption('showDefaultScreen')}
          onClickOption={onClickOption}
        />
        <ContinueMessageModal
          show={showModal.showContinueMessageDropper}
          onCloseModal={() => onClickOption('showContinueMessageDropper')}
        />
      </Modal>
    </>
  );
};

export default CreatePostModal;
