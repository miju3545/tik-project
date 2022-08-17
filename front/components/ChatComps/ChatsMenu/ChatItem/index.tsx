import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

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
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: darkgray;
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
  return (
    <Base theme={theme}>
      <Link to={`/dm/${data.id}`}>
        <Avatar>
          <img src={data.avatar} />
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
