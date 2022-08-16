import React, { FC, useCallback, useState } from 'react';
import Menu from '@components/Menu';
import MenuItem from '@components/Header/MenuItem';
import { BsPencilSquare, BsCameraVideoFill } from 'react-icons/bs';
import { RiBookOpenFill, RiStickyNoteFill } from 'react-icons/ri';
import MenuContent from '@components/Header/MenuContent';
import { Header } from '@components/Header/MenuContent/style';
import CreatePostModal from '@components/Header/Modals/CreatePostModal';
import { SideMenu } from '@components/Header/Modals/MoreMenuModal/style';
import CreateMemoModal from '@components/Header/Modals/CreateMemoModal';

interface IProps {
  show: boolean | { [key: string]: any }[];
  onCloseModal: () => void;
}

interface IState {
  [key: string]: any;
}

const MenuModal: FC<IProps> = ({ show, onCloseModal }) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  const [showModal, setShowModal] = useState<IState>({
    showCreatePostModal: false,
    showCreateMemoModal: false,
    showCreateReelsModal: false,
    showCreateRoomsModal: false,
  });
  const onClickModal = useCallback((modalName: string) => {
    onCloseModal();
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
    <>
      <Menu show={show} onCloseModal={onCloseModal}>
        <MenuContent title={'메뉴'} style={{ minHeight: '800px' }}>
          <SideMenu>
            <Header>
              <h2>만들기</h2>
            </Header>
            <ul>
              <MenuItem
                onClick={() => onClickModal('showCreatePostModal')}
                icon={<BsPencilSquare />}
                title={'게시물'}
              />
              <MenuItem url="/" icon={<RiBookOpenFill />} title={'스토리'} />
              <MenuItem url="/" icon={<BsCameraVideoFill />} title={'룸스'} />
              <MenuItem
                onClick={() => onClickModal('showCreateMemoModal')}
                icon={<RiStickyNoteFill />}
                title={'메모'}
              />
            </ul>
          </SideMenu>
        </MenuContent>
      </Menu>
      <CreatePostModal show={showModal.showCreatePostModal} onCloseModal={() => onClickModal('showCreatePostModal')} />
      <CreateMemoModal show={showModal.showCreateMemoModal} onCloseModal={() => onClickModal('showCreateMemoModal')} />
      {/*<CreateReelsModal show={showModal.showCreateReelsModal} onCloseModal={() => onClickModal('showCreateReelsModal')} />*/}
      {/*<CreateRoomModal show={showModal.showCreateRoomModal} onCloseModal={() => onClickModal('showCreateRoomModal')} />*/}
    </>
  );
};

export default MenuModal;
