import React, { useCallback, useMemo, useState } from 'react';
import Modal from '@components/Modal';
import ModalContent from '@components/Header/ModalContent';
import styled from '@emotion/styled';
import { useFieldArray, useForm } from 'react-hook-form';
import LabelInput from '@components/Inputs/LabelInput';
import NextButton from '@components/Buttons/NextButton';
import PrevButton from '@components/Buttons/PrevButton';
import PillInput from '@components/Inputs/PillInput';
import useInput from '@hooks/useInput';
import SearchInput from '@components/Inputs/SearchInput';
import DisContinueAlertModal from '@components/Modals/DisContinueAlertModal';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

interface IForm {
  name: string;
  url: string;
  members: { nickname: string }[];
}

export const Form = styled.form``;

export const InputsWrapper = styled.div`
  width: 100%;
  padding: 20px;

  > div {
    margin-bottom: 20px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
`;

const CreateClubModal = ({ show, onCloseModal }: IProps) => {
  const { register, handleSubmit, control, reset, watch, getValues } = useForm<IForm>({
    defaultValues: {
      name: '',
      url: '',
      members: [],
    },
    mode: 'onChange',
  });
  const { name, url, members } = watch();

  const { fields, append, remove, insert } = useFieldArray({ control, name: 'members' });
  const style = useMemo(() => ({ width: '500px', minHeight: '300px' }), []);
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({
    showInviteMembersModal: false,
    showDisContinueAlertModal: false,
  });
  const [member, onChangeMember, setMember] = useInput('');

  const onAddMember = useCallback(() => {
    if (!member) return;
    append({ nickname: member });
    setMember('');
  }, [member]);

  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
    reset();
    handleModal('showInviteMembersModal');
    onCloseModal();
  }, []);

  const onClose = useCallback(() => {
    onCloseModal();
    reset();
  }, []);

  const showAlert = useCallback(() => {
    Boolean(name) || Boolean(url) || members.length ? handleModal('showDisContinueAlertModal') : onClose();
  }, [name, url, members]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal show={show} onCloseModal={showAlert}>
          <ModalContent
            title={'클럽 만들기'}
            show={!showModals.showInviteMembersModal}
            onCloseModal={showAlert}
            style={style}
          >
            <InputsWrapper>
              <LabelInput label={'Club 이름'} register={register('name')} />
              <LabelInput label={'Club url'} register={register('url')} />
              {/* 유효성 검사(이름, url unqiue, 빈칸 제외 - hidden 처리) 후 next 페이지 이동하는 플로우로 수정 */}
              <NextButton
                title="만들기"
                onClick={() => handleModal('showInviteMembersModal')}
                style={useMemo(() => ({ transform: 'translateX(383px)' }), [])}
              />
            </InputsWrapper>
          </ModalContent>
          <ModalContent
            title={'초대하기'}
            show={showModals.showInviteMembersModal}
            onCloseModal={showAlert}
            style={style}
          >
            <InputsWrapper>
              <SearchInput value={member} setValue={setMember} placeholder={'멤버 찾기'} style={{ paddingLeft: 0 }} />
              <button type="button" onClick={onAddMember}>
                초대하기
              </button>
              <ul>
                {fields.map((v, idx) => (
                  <PillInput key={idx} register={register(`members.${idx}.nickname`)} onDelete={() => remove(idx)} />
                ))}
              </ul>
            </InputsWrapper>
            <PrevButton
              onClick={() => handleModal('showInviteMembersModal')}
              style={useMemo(() => ({ position: 'absolute', top: '-49px', left: '20px' }), [])}
            />
            <button type={'submit'}>완료</button>
          </ModalContent>
        </Modal>
      </Form>
      <DisContinueAlertModal
        show={showModals.showDisContinueAlertModal}
        onCloseModal={() => handleModal('showDisContinueAlertModal')}
        onDelete={() => {
          handleModal('showDisContinueAlertModal');
          onClose();
        }}
      />
    </>
  );
};

export default CreateClubModal;
