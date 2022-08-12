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
import UserModal from '@components/Header/UserModal';
import { HeaderBase } from '@components/Header/style';

interface IModalState {
  [key: string]: any;
}
const Header = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState<IModalState>({
    showMenuModal: false,
    showMessageModal: false,
    showUserModal: false,
  });
  // 자신 빼고 다 false
  const onClickActionItem = useCallback((modalName: string) => {
    setShowModal((prev) => {
      for (let v in prev) {
        if (v !== modalName) {
          prev[v] = false;
        } else {
          prev[v] = !prev[v];
        }
      }
      return { ...prev };
    });
  }, []);

  return (
    <HeaderBase theme={theme}>
      <ul>
        <li className={'first-action-items'}>
          <Link to={'/browse/clubs'}>
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
            children={<HeaderItem url="/browse/clubs" content={{ outline: <AiOutlineHome />, fill: <AiFillHome /> }} />}
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
          <HoverLabel
            onClick={() => onClickActionItem('showUserModal')}
            label={'계정'}
            children={<ActionItem content={<FaUser />} />}
          />
        </li>
      </ul>
      <MenuModal show={showModal.showMenuModal} onCloseModal={() => onClickActionItem('showMenuModal')} />
      <MessageModal show={showModal.showMessageModal} onCloseModal={() => onClickActionItem('showMessageModal')} />
      <UserModal show={showModal.showUserModal} onCloseModal={() => onClickActionItem('showUserModal')} />
    </HeaderBase>
  );
};

export default Header;
