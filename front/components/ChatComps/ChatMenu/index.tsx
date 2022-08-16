import React, { createContext, useMemo } from 'react';
import styled from '@emotion/styled';
import Header from '@components/ChatComps/ChatMenu/Header';
import ActionItem from '@components/ActionItem';
import { BsPencilSquare } from 'react-icons/bs';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import HoverLabel from '@components/HoverLabel';
import SearchChatForm from '@components/ChatComps/ChatMenu/SearchChatForm';
import { useForm, FormProvider, SubmitHandler, UseFormProps } from 'react-hook-form';

interface IForm {
  query: string;
}

interface IContext {
  [key: string]: any;
}

export const Base = styled.div`
  width: 360px;
  height: 100%;
  border-right: 1px solid #dfdfdf;

  & ul {
    display: flex;
    > div {
      margin-left: 7px;
    }
  }
`;

const ChatMenu = () => {
  const style = useMemo(() => ({ width: '38px', height: '38px' }), []);
  const methods = useForm<IForm>({ defaultValues: { query: '' }, mode: 'onChange' });
  return (
    <Base>
      <Header title={'채팅'}>
        <ul>
          <HoverLabel label={'더보기'} children={<ActionItem content={<BiDotsHorizontalRounded />} style={style} />} />
          <HoverLabel label={'화상'} children={<ActionItem content={<RiVideoAddFill />} style={style} />} />
          <HoverLabel label={'작성하기'} children={<ActionItem content={<BsPencilSquare />} style={style} />} />
        </ul>
      </Header>
      <FormProvider {...methods}>
        <SearchChatForm />
      </FormProvider>
    </Base>
  );
};

export default ChatMenu;
