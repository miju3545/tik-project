import React from 'react';
import styled from '@emotion/styled';
import HoverLabel from '@components/HoverLabel';
import { BsFillReplyFill } from 'react-icons/bs';

export const Container = styled.ul`
  display: flex;
  align-items: center;
  //position: absolute;
  padding: 2px;
  //top: -20px;
  //right: 0;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;
export const ToolItem = styled.li`
  width: 34px;
  height: 34px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #eee;
  }
`;

const ChatToolBox = () => {
  return (
    <Container>
      <HoverLabel
        label={'댓글'}
        children={
          <ToolItem>
            <BsFillReplyFill />
          </ToolItem>
        }
        style={{ top: '-40px' }}
      />
      <HoverLabel label={'기타'} children={<ToolItem>...</ToolItem>} style={{ top: '-40px' }} />
    </Container>
  );
};

export default ChatToolBox;
