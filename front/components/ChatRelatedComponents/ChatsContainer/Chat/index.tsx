import React, { memo, useMemo } from 'react';
import gravatar from 'gravatar';
import { IDM } from '@typings/db';
import dayjs from 'dayjs';
import HoverChatToolBox from '@components/ChatRelatedComponents/ChatsContainer/HoverChatToolBox';
import regexifyString from 'regexify-string';
import { Container, MentionPill } from './style';
interface IProps {
  me: boolean;
  data: IDM;
}

const Chat = ({ me, data }: IProps) => {
  const sender = data.Sender;
  const BACK_URL = 'http://localhost:3000';
  const filteredContent = useMemo(
    () =>
      data.content.startsWith('uploads\\') ? (
        <img src={`${BACK_URL}/${data.content}`} />
      ) : (
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
        })
      ),
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
        <HoverChatToolBox />
      </div>
    </Container>
  );
};

export default memo(Chat);
