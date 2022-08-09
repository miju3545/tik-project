import React, { FC, useCallback, useState } from 'react';
import Menu from '@components/Menu';
import MenuItem from '@components/Header/MenuItem';
import { BsPencilSquare, BsCameraVideoFill } from 'react-icons/bs';
import { RiBookOpenFill } from 'react-icons/ri';
import MenuContent from '@components/Header/MenuContent';
import { Header } from '@components/Header/MenuContent/style';
import CreatePostModal from '@components/Header/CreatePostModal';
import { SideMenu } from '@components/Header/MenuModal/style';

interface IProps {
  show: boolean | { [key: string]: any }[];
  onCloseModal: () => void;
}

interface IState {
  [key: string]: any;
}

const MenuModal: FC<IProps> = ({ show, onCloseModal }) => {
  const [showModal, setShowModal] = useState<IState>({ showCreatePostModal: false });
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
            </ul>
          </SideMenu>
        </MenuContent>
      </Menu>
      <CreatePostModal show={showModal.showCreatePostModal} onCloseModal={() => onClickModal('showCreatePostModal')} />
    </>
  );
};

export default MenuModal;
