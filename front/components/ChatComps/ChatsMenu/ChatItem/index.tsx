import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';
import useSocket from '@hooks/useSocket';

interface IProps {
  data: { id: number; nickname: string; avatar: string; text: string };
}

export const Base = styled.li<{ [key: string]: any }>`
  height: 60px;

  > a {
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;
export const Avatar = styled.div<{ isOnline: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: darkgray;
  position: relative;

  > .isOnline {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    > .circle {
      position: absolute;
      float: right;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ isOnline }) => (isOnline ? 'green' : 'gray')};
    }
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  > .nickname {
    font-size: 15px;
    font-weight: 600;
  }
  > .text {
    color: dimgray;
  }
`;

const ChatItem = ({ data }: IProps) => {
  const theme = useTheme();
  const club = 'general';
  const userData = { id: 1, nickname: 'example' };
  // const [socket] = useSocket(club);
  const [onlineList, setOnlineList] = useState<number[]>([]);

  // useEffect(() => {
  //   if (club && userData && socket) {
  //     socket.on('onlineList', (data: number[]) => {
  //       setOnlineList(data);
  //     });
  //
  //     return () => {
  //       socket?.off('onlineList');
  //     };
  //   }
  // }, [club, userData, socket]);

  return (
    <Base theme={theme}>
      <Link to={`/dm/${data.id}`}>
        <Avatar isOnline={onlineList.includes(data.id)}>
          <img src={data.avatar} />
          <div className={'isOnline'}>
            <div className={'circle'}></div>
          </div>
        </Avatar>
        <Texts>
          <span className={'nickname'}>{data.nickname}</span>
          <span className={'text'}>{data.text}</span>
        </Texts>
      </Link>
    </Base>
  );
};

export default ChatItem;
