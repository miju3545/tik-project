import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import ActionItem from '@components/ActionItem';
import HoverLabel from '@components/HoverLabel';
import { IoSearchOutline } from 'react-icons/io5';
import { AiFillMessage, AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiChatSmile2Fill } from 'react-icons/ri';
import { HiBell, HiOutlineUserGroup, HiUserGroup, HiOutlineUsers, HiUsers } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';

import HeaderItem from '@components/Header/HeaderItem';
import MenuModal from '@components/Header/MenuModal';
import MessageModal from '@components/Header/MessageModal';

export const HeaderBase = styled.header<{ theme: any }>`
  width: 100%;
  height: 58px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 0 20px;
  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    > li {
      width: 33.3%;
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
    }

    > li.first-action-items {
      > a {
        margin-right: 10px;
      }
    }
    > li.mid-action-items {
      > div {
        display: block;
        width: 33.3%;
      }
    }
    > li.last-action-items {
      justify-content: flex-end;
      > div {
        margin-left: 10px;
      }
    }
  }
`;

interface IModalState {
  [key: string]: any;
}
const Header = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState<IModalState>({ showMenuModal: false, showMessageModal: false });

  const onClickActionItem = useCallback((modalName: string) => {
    setShowModal((prev) => ({ ...prev, [modalName]: true }));
  }, []);

  const onCloseModal = useCallback(() => {
    setShowModal({ showMenuModal: false });
    setShowModal({ showMessageModal: false });
  }, []);

  return (
    <HeaderBase theme={theme}>
      <ul>
        <li className={'first-action-items'}>
          <Link to={'/'}>
            <ActionItem
              content={<RiChatSmile2Fill />}
              style={{ backgroundColor: theme.colors.blue[600], color: '#fff', fontSize: '24px' }}
            />
          </Link>
          <HoverLabel label={'검색'} children={<ActionItem content={<IoSearchOutline />} />} />
        </li>
        <li className={'mid-action-items'}>
          <HoverLabel
            label={'홈'}
            children={<HeaderItem url="/" content={{ outline: <AiOutlineHome />, fill: <AiFillHome /> }} />}
            style={{ top: '60px' }}
          />
          <HoverLabel
            label={'친구'}
            children={<HeaderItem url="/friends" content={{ outline: <HiOutlineUsers />, fill: <HiUsers /> }} />}
            style={{ top: '60px' }}
          />
          <HoverLabel
            label={'그룹'}
            children={<HeaderItem url="/groups" content={{ outline: <HiOutlineUserGroup />, fill: <HiUserGroup /> }} />}
            style={{ top: '60px' }}
          />
        </li>
        <li className={'last-action-items'}>
          <HoverLabel
            onClick={() => onClickActionItem('showMenuModal')}
            label={'메뉴'}
            children={<ActionItem content={<BsGrid3X3GapFill />} active={showModal.showMenuModal} />}
          />
          <HoverLabel
            onClick={() => onClickActionItem('showMessageModal')}
            label={'메신저'}
            children={<ActionItem content={<AiFillMessage />} />}
          />
          <HoverLabel label={'알림'} children={<ActionItem content={<HiBell />} />} />
          <HoverLabel label={'계정'} children={<ActionItem content={<FaUser />} />} />
        </li>
      </ul>
      <MenuModal show={showModal.showMenuModal} onCloseModal={onCloseModal} />
      <MessageModal show={showModal.showMessageModal} onCloseModal={onCloseModal} />
    </HeaderBase>
  );
};

export default Header;
