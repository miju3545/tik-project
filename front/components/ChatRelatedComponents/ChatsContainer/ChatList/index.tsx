import React, { FC, forwardRef, useCallback, useRef, useState } from 'react';
import { ChatZone, Section, StickyHeader } from './style';
import Chat from '@components/ChatRelatedComponents/ChatsContainer/Chat';
import { IChat, IDM, IUser } from '@typings/db';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useParams } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@utils/fetcher';

interface IProps {
  chatSections: { [key: string]: IDM[] };
  setSize: (f: (size: number) => number) => Promise<IDM[][] | undefined>;
  isEmpty: boolean;
  isReachingEnd: boolean;
}

const ChatList = forwardRef<Scrollbars, IProps>(({ chatSections, setSize, isEmpty, isReachingEnd }, ref) => {
  const { id } = useParams<{ id: string }>();
  const userData = { id: 2, nickname: 'example' };
  const [showModals, setShowModals] = useState<{ [key: string]: boolean }>({ showChatSectionSettingMenu: true });
  const handleModal = useCallback((modalName: string) => {
    setShowModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) {
      setSize((prevSize) => prevSize + 1).then(() => {
        // 스크롤 위치 유지
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={ref} onScrollFrame={onScroll}>
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
