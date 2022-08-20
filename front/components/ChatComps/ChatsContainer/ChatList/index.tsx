import React from 'react';
import styled from '@emotion/styled';
import { ChatZone, Section, StickyHeader } from './style';
import ChatBubble from '@components/ChatComps/ChatsContainer/ChatBubble';

interface IData {
  id: number;
  content: string;
  userId: number;
}

const ChatList = () => {
  const userData = { id: 2, nickname: 'example' };
  const dummies: IData[] = [
    { id: 1, content: 'hello', userId: 2 },
    { id: 2, content: 'world', userId: 2 },
    { id: 3, content: 'so hungry', userId: 2 },
  ];
  return (
    <ChatZone>
      <Section>
        {dummies.map((chat) => (
          <ChatBubble key={chat.id} me={userData.id === chat.userId} data={chat} />
        ))}
      </Section>
    </ChatZone>
  );
};

export default ChatList;
