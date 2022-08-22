import React, { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import dayjs from 'dayjs';
import ChatToolBox from '@components/ChatRelatedComponents/ChatsContainer/ChatToolBox';
import regexifyString from 'regexify-string';
import { Link } from 'react-router-dom';

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
    background-color: #efefef;

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

    > p {
      margin-top: 5px;
    }
  }

  > .toolbox-area {
    display: none;
    transition: 0.2s;
    position: absolute;
    top: -20px;
    right: 20px;
  }
`;

export const MentionPill = styled(Link)`
  padding: 3px 8px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  color: gray;
  transition: 0.2s;

  &:hover {
    border-color: #191919;
    color: #191919;
    background-color: #fff;
  }
`;

const Chat = ({ me, data }: IProps) => {
  const sender = data.Sender;
  const filteredContent = useMemo(
    () =>
      regexifyString({
        input: data.content,
        pattern: /@\[(.+?)\]\((\d+?)\)|\n/g,
        decorator(match, index) {
          const arr: string[] | null = match.match(/@\[(.+?)\]\((\d+?)\)/)!;

          if (arr) {
            return (
              <MentionPill key={match + index} to={`/dm/${arr[2]}`}>
                @{arr[1]}
              </MentionPill>
            );
          }

          return <br key={index} />;
        },
      }),
    [data.content],
  );

  return (
    <Container>
      <div className={'chat-img'}>
        <img src={gravatar.url(sender.nickname, { s: '36px', d: 'retro' })} alt={sender.nickname} />
      </div>
      <div className={'chat-text'}>
        <div className={'chat-user'}>
          <span className={'user-nickname'}>{sender.nickname}</span>
          <span className={'created-at'}>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{filteredContent}</p>
      </div>
      <div className={'toolbox-area'}>
        <ChatToolBox />
      </div>
    </Container>
  );
};

export default memo(Chat);
