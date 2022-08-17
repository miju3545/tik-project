import React from 'react';
import styled from '@emotion/styled';
import ChatItem from '@components/ChatComps/ChatsMenu/ChatItem';

export const Base = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`;
const ChatList = () => {
  const users = [
    { id: 1, nickname: 'example', avatar: '/', text: 'hello' },
    { id: 2, nickname: 'example2', avatar: '/', text: 'good' },
    { id: 3, nickname: 'example3', avatar: '/', text: 'what' },
    { id: 4, nickname: 'example4', avatar: '/', text: 'ff' },
  ];
  return (
    <Base>
      {users.map((user) => (
        <ChatItem key={user.id} data={user} />
      ))}
    </Base>
  );
};

export default ChatList;
