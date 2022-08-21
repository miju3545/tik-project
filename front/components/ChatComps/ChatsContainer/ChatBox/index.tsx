import React, { useCallback, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { ChatArea, Form, Toolbox, SendButton, MentionsTextarea, EachMention } from './style';
import autosize from 'autosize';
import { Mention, SuggestionDataItem } from 'react-mentions';
import gravatar from 'gravatar';
import { useFormContext } from 'react-hook-form';

interface IProps {
  value: string;
  onSubmit: (e?: any) => void;
  onChange: (e: any) => void;
  placeholder?: string;
}

/* DirectMessage, Club 에서 사용됨 */
const ChatBox = ({ value, onChange, onSubmit, placeholder = 'Aa' }: IProps) => {
  const membersData: { id: number; nickname: string }[] = [
    { id: 1, nickname: 'example' },
    { id: 2, nickname: 'example2' },
    { id: 3, nickname: 'example3' },
    { id: 4, nickname: 'example4' },
  ];

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

  const renderSuggestion = useCallback(
    (
      suggestion: SuggestionDataItem,
      search: string,
      highlightedDisplay: React.ReactNode,
      index: number,
      focus: boolean,
    ): React.ReactNode => {
      if (!membersData) return;

      return (
        <EachMention focus={focus}>
          <img
            src={gravatar.url(membersData[index].nickname, { s: '20px', d: 'retro' })}
            alt={membersData[index].nickname}
          />
          <span>{highlightedDisplay}</span>
        </EachMention>
      );
    },
    [membersData],
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
          autoFocus={true}
          placeholder={placeholder}
          onKeyPress={onKeyDownChat}
          onChange={onChange}
          value={value}
          inputRef={textareaRef}
          allowSuggestionsAboveCursor
        >
          <Mention
            appendSpaceOnAdd
            trigger={'@'}
            data={membersData?.map((v) => ({ id: v.id, display: v.nickname })) || []}
            renderSuggestion={renderSuggestion}
          />
        </MentionsTextarea>
        <Toolbox>
          <SendButton type={'button'} disabled={!Boolean(value)} onClick={onSubmit}>
            <IoMdSend />
          </SendButton>
        </Toolbox>
      </Form>
    </ChatArea>
  );
};

export default ChatBox;
