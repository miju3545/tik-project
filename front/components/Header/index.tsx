import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import ActionItem from '@components/ActionItem';
import HoverLabel from '@components/HoverLabel';
import { IoSearchOutline } from 'react-icons/io5';
import { AiFillMessage, AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiChatSmile2Fill } from 'react-icons/ri';
import { HiBell, HiOutlineUserGroup, HiUserGroup, HiOutlineUsers, HiUsers } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import MidMenuItem from '@components/Header/MidMenuItem';
import MoreMenuModal from '@components/Header/Modals/MoreMenuModal';
import ChatMenuModal from '@components/Header/Modals/ChatMenuModal';
import UserMenuModal from '@components/Header/Modals/UserMenuModal';
import { Base } from '@components/Header/style';

interface IModalState {
  [key: string]: any;
}

const Header = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState<IModalState>({
    showMoreMenuModal: false,
    showChatMenuModal: false,
    showUserMenuModal: false,
  });

  const onClickActionItem = useCallback((modalName: string) => {
    setShowModal((prev) => {
      for (let v in prev) {
        prev[v] = v !== modalName ? false : !prev[v];
      }

      return { ...prev };
    });
  }, []);

  return (
    <Base theme={theme}>
      <ul>
        <li className={'left-menu'}>
          <Link to={'/browse/clubs'}>
            <ActionItem
              content={<RiChatSmile2Fill />}
              style={{ backgroundColor: theme.colors.blue[600], color: '#fff', fontSize: '24px' }}
            />
          </Link>
          <HoverLabel label={'검색'} children={<ActionItem content={<IoSearchOutline />} />} />
        </li>
        <li className={'mid-menu'}>
          <HoverLabel
            label={'홈'}
            children={
              <MidMenuItem url="/browse/clubs" content={{ outline: <AiOutlineHome />, fill: <AiFillHome /> }} />
            }
            style={{ top: '60px' }}
          />
          <HoverLabel
            label={'친구'}
            children={<MidMenuItem url="/friends" content={{ outline: <HiOutlineUsers />, fill: <HiUsers /> }} />}
            style={{ top: '60px' }}
          />
          <HoverLabel
            label={'그룹'}
            children={
              <MidMenuItem url="/groups" content={{ outline: <HiOutlineUserGroup />, fill: <HiUserGroup /> }} />
            }
            style={{ top: '60px' }}
          />
        </li>
        <li className={'right-menu'}>
          <HoverLabel
            onClick={() => onClickActionItem('showMoreMenuModal')}
            label={'메뉴'}
            children={<ActionItem content={<BsGrid3X3GapFill />} active={showModal.showMoreMenuModal} />}
          />
          <HoverLabel
            onClick={() => onClickActionItem('showChatMenuModal')}
            label={'메신저'}
            children={<ActionItem content={<AiFillMessage />} />}
          />
          <HoverLabel label={'알림'} children={<ActionItem content={<HiBell />} />} />
          <HoverLabel
            onClick={() => onClickActionItem('showUserMenuModal')}
            label={'계정'}
            children={<ActionItem content={<FaUser />} />}
          />
        </li>
      </ul>
      <MoreMenuModal show={showModal.showMoreMenuModal} onCloseModal={() => onClickActionItem('showMoreMenuModal')} />
      <ChatMenuModal show={showModal.showChatMenuModal} onCloseModal={() => onClickActionItem('showChatMenuModal')} />
      <UserMenuModal show={showModal.showUserMenuModal} onCloseModal={() => onClickActionItem('showUserMenuModal')} />
    </Base>
  );
};

export default Header;
