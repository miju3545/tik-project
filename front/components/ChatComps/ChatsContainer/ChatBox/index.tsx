import React, { useCallback, useEffect, useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import { ChatArea, Form, Toolbox, SendButton, MentionsTextarea, EachMention } from './style';
import autosize from 'autosize';

interface IProps {
  register: any;
  onSubmit: () => void;
  isValue: boolean;
  placeholder?: string;
}

/* DirectMessage, Club 에서 사용됨 */
const ChatBox = ({ register, onSubmit, isValue, placeholder = 'Aa' }: IProps) => {
  const { ref, ...rest } = register;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // key 조합에 따라서 다른 단축키 edit 기능 추가 가능.
  const onKeyDownChat = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.code === 'Enter' && !e.shiftKey) {
        onSubmit();
      }
    },
    [onSubmit],
  );

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  return (
    <ChatArea>
      <Form onSubmit={onSubmit}>
        <MentionsTextarea
          {...rest}
          autoFocus={true}
          placeholder={placeholder}
          onKeyPress={onKeyDownChat}
          ref={(e) => {
            ref(e);
            textareaRef.current = e;
          }}
        />
        <Toolbox>
          <SendButton type={'button'} disabled={!isValue} onClick={onSubmit}>
            <IoMdSend />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
