import React, { useCallback, useEffect, useState } from 'react';
import Modal from '@components/Modal';
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
import ImageVideoPreviewDropper from '@components/Header/CreatePostModal/ImageVideoPreviewDropper';
import { FormContainer, Form, ToolBox, InputBox, ToolItem, Button } from '@components/Header/CreatePostModal/style';
import axios from 'axios';
import MentionMessageModal from '@components/Header/MentionMessageModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IForm {
  content: string;
  imageOrVideoFiles: [];
  location: string;
  mention: string | null;
  // hashtag: { content: string }[] |  null;
  isPublic: boolean;
}

interface IPreview {
  src: string;
  fileName: string;
}

const CreatePostModal = ({ show, onCloseModal }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      content: '',
      imageOrVideoFiles: [],
      location: 'Gangnam',
      // hashtag: null,
      mention: null,
      isPublic: true,
    },
    mode: 'onChange',
  });

  const inputValues = watch();
  const [showModal, setShowModal] = useState<{ [key: string]: any }>({
    showDefaultScreen: true,
    showImageOrVideoDropper: false,
    showImageOrVideoPreviewDropper: false,
    showEditImageOrVideoDropper: false,
    showLocationDropper: false,
    showMentionDropper: false,
    showContinueMessageModal: false,
    showMentionMessageModal: false,
    isImageOrVideoSelected: false,
    isMentionSelected: false,
    isLocationSelected: true,
  });
  const [previews, setPreviews] = useState<IPreview[]>([]);

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
          ['showDefaultScreen', 'showLocationDropper', 'showMentionDropper', 'showMentionMessageModal'].includes(
            optionItem,
          ) && !prev[v]
            ? 1
            : 0;
      }

      if (!flag) prev['showDefaultScreen'] = true;

      return { ...prev };
    });
  }, []);

  const onSubmit = useCallback((data: IForm) => {
    const formData = new FormData();

    // 타입 별로 다른 루트 탈 수 있게 수정할 것!
    for (const [key, value] of Object.entries(data)) {
      if (key === 'imageOrVideoFiles') {
        for (const [k, v] of Object.entries(data['imageOrVideoFiles'])) {
          formData.append('imageOrVideoFiles', v);
        }
      } else {
        formData.append(key, value);
      }
    }

    axios
      .post('/api/post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const onClose = useCallback((data) => {
    onCloseModal();
    if (data.content || data.imageOrVideoFiles.length >= 1 || data.mention)
      setShowModal((prev) => ({ ...prev, showContinueMessageModal: true }));
  }, []);

  // useEffect(() => {
  //   if (inputValues.imageOrVideoFiles.length) {
  //     setShowModal((prev) => ({
  //       ...prev,
  //       showImageOrVideoDropper: false,
  //       showImageOrVideoPreviewDropper: !prev['showImageOrVideoPreviewDropper'],
  //     }));
  //   }
  // }, [inputValues.imageOrVideoFiles]);

  const onChangeImageVideoDropper = useCallback(async (e: any) => {
    const previewImages: IPreview[] = await Promise.all(
      Array.from(e.target.files).map(async (file: any) => {
        return new Promise((resolve, reject) => {
          try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (e: any) => resolve({ fileName: file.name, src: e.target.result });
          } catch (error) {
            reject(error);
          }
        });
      }),
    );

    if (previewImages.length) {
      setShowModal((prev) => ({
        ...prev,
        showImageOrVideoDropper: false,
        showImageOrVideoPreviewDropper: !prev['showImageOrVideoPreviewDropper'],
        showMentionMessageModal: true,
      }));

      setPreviews(previewImages);

      setTimeout(() => {
        setShowModal((prev) => ({ ...prev, showMentionMessageModal: false }));
      }, 3000);
    }
  }, []);

  return (
    <>
      <Modal show={show} onCloseModal={() => onClose(inputValues)}>
        <ModalContent
          title={'게시물 만들기'}
          show={showModal.showDefaultScreen}
          onCloseModal={() => onClose(inputValues)}
        >
          <UserInfoHeader />
          <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputBox>
                <textarea {...register('content')} placeholder={`${userData.nickname}님, 무슨 생각을 하고 계신가요?`} />
                <div className={'dropper'}>
                  <ImageVideoDropper
                    register={register('imageOrVideoFiles', { onChange: onChangeImageVideoDropper })}
                    show={showModal.showImageOrVideoDropper}
                    onCloseModal={() => {
                      onClickOption('showImageOrVideoDropper');
                      resetField('imageOrVideoFiles');
                    }}
                  />
                  <ImageVideoPreviewDropper
                    register={register('imageOrVideoFiles')}
                    show={showModal.showImageOrVideoPreviewDropper}
                    onCloseModal={() => {
                      onClickOption('showImageOrVideoPreviewDropper');
                      resetField('imageOrVideoFiles');
                    }}
                    previews={previews}
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
                          backgroundColor:
                            showModal.isImageOrVideoSelected || inputValues.imageOrVideoFiles.length >= 1
                              ? '#e3f0d4'
                              : 'transparent',
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
                          backgroundColor:
                            showModal.isMentionSelected || inputValues.mention ? '#e6f3fe' : 'transparent',
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
              <Button
                disabled={!inputValues.content && inputValues.imageOrVideoFiles.length < 1 && !inputValues.mention}
              >
                공유하기
              </Button>
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
          show={showModal.showContinueMessageModal}
          onCloseModal={() => onClickOption('showContinueMessageModal')}
          onClickOption={onClickOption}
          reset={reset}
          setShowModal={setShowModal}
        />
        <MentionMessageModal
          show={showModal.showMentionMessageModal}
          onCloseModal={() => setShowModal((prev) => ({ ...prev, showMentionMessageModal: false }))}
        />
      </Modal>
    </>
  );
};

export default CreatePostModal;
