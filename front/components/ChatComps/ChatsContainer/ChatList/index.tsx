import React, { useCallback, useRef } from 'react';
import { ChatZone, Section, StickyHeader } from './style';
import Chat from '@components/ChatComps/ChatsContainer/Chat';
import { IChat, IDM, IUser } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router-dom';

const ChatList = () => {
  const { id } = useParams<{ id: string }>();
  const userData = { id: 2, nickname: 'example' };
  const scrollbarRef = useRef(null);
  const chatsData: IDM[] = [
    {
      id: 1,
      content: '안녕 만나서 반가어',
      Sender: { id: 2, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: Date().toString(),
    },
    {
      id: 3,
      content: 'hello',
      Sender: { id: 4, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: Date().toString(),
    },
    {
      id: 6,
      content: 'hello',
      Sender: { id: 6, nickname: userData.nickname + id },
      Receiver: { id: 3, nickname: 'mee' },
      createdAt: Date().toString(),
    },
  ];

  const onScroll = useCallback(() => {}, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        <Section>
          {chatsData?.map((chat) => (
            <Chat key={chat.id} me={false} data={chat} />
          ))}
        </Section>
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
