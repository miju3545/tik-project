import React, { useCallback } from 'react';
import Header from '@components/ChatComps/ChatsContainer/Header';
import ChatList from '@components/ChatComps/ChatsContainer/ChatList';
import ChatBox from './ChatBox';
import { useForm } from 'react-hook-form';
import { Container } from './style';

interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

interface IForm {
  chat: string;
}

const ChatsContainer = ({ show, showSideMenu }: IProps) => {
  const { register, handleSubmit, watch, reset } = useForm<IForm>({
    defaultValues: { chat: '' },
    mode: 'onChange',
  });
  const { chat } = watch();
  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
    reset();

    // axios.post(`/api/dm/:id/chat`)
  }, []);

  return (
    <Container show={show}>
      <Header show={show} showSideMenu={showSideMenu} />
      <ChatList />
      <ChatBox register={register('chat')} onSubmit={handleSubmit(onSubmit)} isValue={Boolean(chat)} />
    </Container>
  );
};

export default ChatsContainer;
