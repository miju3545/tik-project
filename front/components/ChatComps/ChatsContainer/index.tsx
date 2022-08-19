import React, { useCallback } from 'react';
import Header from '@components/ChatComps/ChatsContainer/Header';
import ChatList from '@components/ChatComps/ChatsContainer/ChatList';
import ChatBox from '@components/ChatComps/ChatsContainer/ChatBox';
import { FormProvider, useForm } from 'react-hook-form';
import { Container } from './style';
interface IProps {
  show: boolean;
  showSideMenu: () => void;
}

interface IForm {
  content: string;
}

const ChatsContainer = ({ show, showSideMenu }: IProps) => {
  const { register, handleSubmit, watch, reset } = useForm<IForm>({ defaultValues: { content: '' } });
  const { content } = watch();
  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
    reset();
    // axios.post(`/api/dm/:id/chat`)
  }, []);

  return (
    <Container show={show}>
      <Header show={show} showSideMenu={showSideMenu} />
      <ChatList />
      <ChatBox register={register('content')} onSubmit={handleSubmit(onSubmit)} isValue={Boolean(content)} />
    </Container>
  );
};

export default ChatsContainer;
