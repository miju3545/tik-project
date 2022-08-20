import React from 'react';
import styled from '@emotion/styled';

interface IData {
  id: number;
  content: string;
  userId: number;
  nickname: string;
}

interface IProps {
  me: boolean;
  data: any;
}

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  > .content {
    display: inline-block;
    height: 32px;
    font-size: 13px;
    margin-top: 4px;
  }
`;

const ChatBubble = ({ me, data }: IProps) => {
  return (
    <Container>
      <span className={'content'}>{data.content}</span>
    </Container>
  );
};

export default ChatBubble;
