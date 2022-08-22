import React, { createContext, useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import Header from '@components/ChatRelatedComponents/ChatsMenu/Header';
import ActionItem from '@components/ActionItem';
import { BsPencilSquare } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import HoverLabel from '@components/HoverLabel';
import SearchBox from '@components/ChatRelatedComponents/ChatsMenu/SearchBox';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ChatList from '@components/ChatRelatedComponents/ChatsMenu/ChatList';
import SearchResultModal from '@components/ChatRelatedComponents/ChatsMenu/SearchResultModal';

interface IForm {
  query: string;
}

export const Base = styled.div`
  width: 360px;
  height: 100%;
  border-right: 1px solid #dfdfdf;
  padding: 0 18px;

  & ul {
    display: flex;
    > div {
      margin-left: 7px;
    }
  }
`;

const ChatMenu = () => {
  const style = useMemo(() => ({ width: '38px', height: '38px' }), []);
  const [showModals, setShowModals] = useState<{ [key: string]: any }>({ showSearchResultModal: false });
  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);
  const { register, handleSubmit, reset, watch } = useForm<IForm>({ defaultValues: { query: '' }, mode: 'onChange' });
  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
  }, []);

  return (
    <Base>
      <Header title={'채팅'}>
        <ul>
          <HoverLabel
            label={'더보기'}
            children={
              <Link to={''}>
                <ActionItem content={<BiDotsHorizontalRounded />} style={style} />
              </Link>
            }
          />
          <HoverLabel
            label={'화상'}
            children={
              <Link to={'/'}>
                <ActionItem content={<RiVideoAddFill />} style={style} />
              </Link>
            }
          />
          <HoverLabel
            label={'작성하기'}
            children={
              <Link to={'/dm/new'}>
                <ActionItem content={<BsPencilSquare />} style={style} />
              </Link>
            }
          />
        </ul>
      </Header>
      {!showModals.showSearchResultModal && <SearchBox register={register('query')} handleModal={handleModal} />}
      <SearchResultModal
        register={register}
        show={showModals.showSearchResultModal}
        onSubmit={handleSubmit(onSubmit)}
        onCloseModal={() => handleModal('showSearchResultModal')}
      />
      {!showModals.showSearchResultModal && <ChatList />}
    </Base>
  );
};

export default ChatMenu;
