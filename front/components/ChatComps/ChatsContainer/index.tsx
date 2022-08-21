import React, { useCallback, useState } from 'react';
import Header from '@components/ChatComps/ChatsContainer/Header';
import ChatList from '@components/ChatComps/ChatsContainer/ChatList';
import ChatBox from './ChatBox';
import { useForm, FormProvider } from 'react-hook-form';
import { Container } from './style';
import useInput from '@hooks/useInput';

interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

interface IForm {
  chat: string;
}

const ChatsContainer = ({ show, showSideMenu }: IProps) => {
  const [chat, onChangeChat, setChat] = useInput('');

  const onSubmit = useCallback(() => {
    console.log(chat);
    setChat('');
  }, [chat]);

  return (
    <Container show={show}>
      <Header show={show} showSideMenu={showSideMenu} />
      <ChatList />
      <ChatBox value={chat} onChange={onChangeChat} onSubmit={onSubmit} />
    </Container>
  );
};

export default ChatsContainer;
