import React from 'react';
import styled from '@emotion/styled';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import dayjs from 'dayjs';
import ChatToolBox from '@components/ChatComps/ChatsContainer/ChatToolBox';

interface IProps {
  me: boolean;
  data: IDM;
}

export const Container = styled.div`
  display: flex;
  padding: 8px 20px;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #eee;

    & .toolbox-area {
      display: block;
    }
  }

  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }

  > .chat-text {
    > .chat-user {
      display: flex;
      align-items: baseline;
      > .user-nickname {
        font-size: 14px;
        font-weight: 600;
      }
      > .created-at {
        font-size: 12px;
        line-height: 14px;
        margin-left: 6px;
        color: gray;
      }
    }
  }

  > .toolbox-area {
    display: none;
    transition: 0.2s;
  }
`;

const Chat = ({ me, data }: IProps) => {
  return (
    <Container>
      <div className={'chat-img'}>
        <img src={gravatar.url(data.Sender.nickname, { s: '36px', d: 'retro' })} alt={data.Sender.nickname} />
      </div>
      <div className={'chat-text'}>
        <div className={'chat-user'}>
          <span className={'user-nickname'}>{data.Sender.nickname}</span>
          <span className={'created-at'}>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{data.content}</p>
      </div>
      <div className={'toolbox-area'}>
        <ChatToolBox />
      </div>
    </Container>
  );
};

export default Chat;
