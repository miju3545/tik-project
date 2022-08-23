import React, { forwardRef, MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { ChatArea, Form, ToolBoxContainer, SendButton, MentionsTextarea, EachMention } from './style';
import autosize from 'autosize';
import { Mention, SuggestionDataItem } from 'react-mentions';
import gravatar from 'gravatar';
import ChatToolBox from '@components/ChatRelatedComponents/ChatsContainer/ChatToolBox';
import { ChatContext, IChatContext } from '@components/ChatRelatedComponents/ChatsContainer';

interface IProps {
  placeholder?: string;
}

/* DirectMessage, Club 에서 사용됨 */
const ChatBox = forwardRef<HTMLTextAreaElement, IProps>(({ placeholder = 'Aa' }, textareaRef) => {
  const context = useContext<IChatContext | null>(ChatContext);
  const myData = { id: 11, nickname: 'rovxx' };
  const membersData: { id: number; nickname: string }[] = [
    { id: 1, nickname: 'example' },
    { id: 2, nickname: 'example2' },
    { id: 3, nickname: 'example3' },
    { id: 4, nickname: 'example4' },
  ];

  // key 조합에 따라서 다른 단축키 edit 기능 추가 가능.
  const onKeyDownChat = useCallback(
    (e: any) => {
      if (e.code === 'Enter' && !e.shiftKey) {
        // onSubmit();
        context?.onSubmit();
      }
    },
    [context?.onSubmit],
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
    const current = (textareaRef as MutableRefObject<HTMLTextAreaElement>)?.current;
    if (current) {
      autosize(current);
    }
  }, []);

  return (
    <ChatArea>
      <Form onSubmit={context?.onSubmit}>
        <MentionsTextarea
          autoFocus={true}
          placeholder={placeholder}
          onKeyPress={onKeyDownChat}
          onChange={context?.onChangeChat}
          value={context?.chat}
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
        <ToolBoxContainer>
          <ChatToolBox />
          <SendButton type={'button'} disabled={!Boolean(context?.chat)} onClick={context?.onSubmit}>
            <IoMdSend />
          </SendButton>
        </ToolBoxContainer>
      </Form>
    </ChatArea>
  );
});

export default ChatBox;
