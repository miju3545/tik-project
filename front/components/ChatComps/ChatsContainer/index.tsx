import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { Route, Switch, useParams } from 'react-router-dom';
import Header from '@components/ChatComps/ChatsContainer/Header';
import ChatRoom from '@components/ChatComps/ChatsContainer/ChatRoom';
import ChatBox from '@components/ChatComps/ChatsContainer/ChatBox';
import { useForm } from 'react-hook-form';

interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

interface IForm {
  content: string;
}

export const Base = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 0;
  left: 360px;
  right: ${({ show }) => (show ? '360px' : 0)};
  bottom: 0;
  transition: 0.2s;
`;

const ChatsContainer = ({ show, showSideMenu }: IProps) => {
  const { register, handleSubmit } = useForm<IForm>({ defaultValues: { content: '' } });

  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
  }, []);

  return (
    <Base show={show}>
      <Header show={show} showSideMenu={showSideMenu} />
      <ChatRoom />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ChatBox register={register('content')} />
      </form>
    </Base>
  );
};

export default ChatsContainer;
