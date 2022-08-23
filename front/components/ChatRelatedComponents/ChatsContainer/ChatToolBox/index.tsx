import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { ChatContext, IChatContext } from '@components/ChatRelatedComponents/ChatsContainer';

export const Container = styled.ul`
  display: flex;
`;
export const ToolButton = styled.label`
  border: 1px solid gray;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
`;

const ChatToolBox = () => {
  const context = useContext<IChatContext | null>(ChatContext);
  console.log('files >>>', context?.files);
  return (
    <Container>
      <ToolButton>
        <span>사진/동영상 업로드</span>
        <input type={'file'} onChange={context?.onChangeFiles} multiple hidden />
      </ToolButton>
    </Container>
  );
};

export default ChatToolBox;
