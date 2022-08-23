import React, { FC, forwardRef, MutableRefObject, useCallback, useRef, useState } from 'react';
import { ChatZone, Section, StickyHeader } from './style';
import Chat from '@components/ChatRelatedComponents/ChatsContainer/Chat';
import { IChat, IDM, IUser } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

interface IProps {
  chatSections: { [key: string]: IDM[] };
  setSize: (f: (size: number) => number) => Promise<IDM[][] | undefined>;
  isReachingEnd: boolean;
}

const ChatList = forwardRef<Scrollbars, IProps>(({ chatSections, setSize, isReachingEnd }, scrollbarRef) => {
  const { id } = useParams<{ id: string }>();
  const userData = { id: 2, nickname: 'example' };
  const [showModals, setShowModals] = useState<{ [key: string]: boolean }>({ showChatSectionSettingMenu: true });
  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) {
      setSize((prevSize) => prevSize + 1).then(() => {
        const current = (scrollbarRef as MutableRefObject<Scrollbars>)?.current;
        if (current) {
          current.scrollTop(current.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chat], idx) => {
          return (
            <Section key={idx}>
              <StickyHeader>
                <button onClick={() => handleModal('showChatSectionSettingMenu')}>
                  {date}
                  <RiArrowDropDownLine />
                </button>
              </StickyHeader>
              {chat?.map((c) => (
                <Chat key={c.id} me={false} data={c} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
});

export default ChatList;
