import React, { FC, useCallback, useState } from 'react';
import Menu from '@components/Menu';
import MenuItem from '@components/Header/MenuItem';
import { BsPencilSquare, BsCameraVideoFill } from 'react-icons/bs';
import { RiBookOpenFill, RiStickyNoteFill } from 'react-icons/ri';
import { FaUsers, FaCalendarCheck, FaUserFriends } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BiNews } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { IoIosTime, IoIosPaper } from 'react-icons/io';
import MenuContent from '@components/Header/MenuContent';
import { Header } from '@components/Header/MenuContent/style';
import CreatePostModal from '@components/Header/Modals/CreatePostModal';
import { SideMenu } from '@components/Header/Modals/MoreMenuModal/style';
import CreateMemoModal from '@components/Header/Modals/CreateMemoModal';
import SearchResultModal from '@components/ChatComps/ChatsMenu/SearchResultModal';
import { useForm } from 'react-hook-form';
import SearchForm from '@components/Inputs/SearchInput';
import styled from '@emotion/styled';
import CreateClubModal from '@components/Header/Modals/CreateClubModal';

interface IProps {
  show: boolean | { [key: string]: any }[];
  onCloseModal: () => void;
}

interface IState {
  [key: string]: any;
}

interface IForm {
  query: string;
}

export const Form = styled.form`
  padding-bottom: 20px;
`;

const MenuModal: FC<IProps> = ({ show, onCloseModal }) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  const { register, handleSubmit, watch, reset } = useForm<IForm>({ defaultValues: { query: '' }, mode: 'onChange' });
  const [showModals, setShowModals] = useState<IState>({
    showCreateClubModal: false,
    showCreatePostModal: false,
    showCreateMemoModal: false,
    showCreateReelsModal: false,
    showCreateRoomsModal: false,
    showSearchResultModal: true,
  });

  const handleModal = useCallback((modalName: string) => {
    onCloseModal();
    setShowModals((prev) => {
      for (let v in prev) prev[v] = v !== modalName ? false : !prev[v];
      return { ...prev };
    });
  }, []);

  const onSubmit = useCallback((data: IForm) => {
    console.log(data);
  }, []);

  return (
    <>
      <Menu show={show} onCloseModal={onCloseModal}>
        <MenuContent title={'메뉴'} style={{ width: '600px', minHeight: '900px' }}>
          <SideMenu style={{ left: '20px', top: '30px', width: '300px' }}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <SearchForm register={register('query')} placeholder={'메뉴 검색'} style={{ paddingLeft: 0 }} />
            </Form>
            <Header>
              <h2 style={{ fontSize: '17px', fontWeight: '600' }}>소셜</h2>
            </Header>
            <ul>
              <MenuItem url="/" icon={<FaCalendarCheck />} title={'이벤트'} />
              <MenuItem
                onClick={() => handleModal('showCreatePostModal')}
                icon={<FaUserFriends />}
                title={'친구 찾기'}
              />
              <MenuItem url="/" icon={<HiUserGroup />} title={'그룹'} />
              <MenuItem url="/" icon={<BiNews />} title={'뉴스피드'} />
              <MenuItem onClick={() => handleModal('showCreateMemoModal')} icon={<AiFillStar />} title={'즐겨찾기'} />
              <MenuItem onClick={() => handleModal('showCreateMemoModal')} icon={<IoIosTime />} title={'최신'} />
              <MenuItem onClick={() => handleModal('showCreateMemoModal')} icon={<IoIosPaper />} title={'페이지'} />
            </ul>
          </SideMenu>
          <SideMenu style={{ right: '20px', top: '30px', width: '200px' }}>
            <Header>
              <h2>만들기</h2>
            </Header>
            <ul>
              <MenuItem onClick={() => handleModal('showCreateClubModal')} icon={<FaUsers />} title={'클럽'} />
              <MenuItem onClick={() => handleModal('showCreatePostModal')} icon={<BsPencilSquare />} title={'게시물'} />
              <MenuItem url="/" icon={<RiBookOpenFill />} title={'스토리'} />
              <MenuItem url="/" icon={<BsCameraVideoFill />} title={'룸스'} />
              <MenuItem onClick={() => handleModal('showCreateMemoModal')} icon={<RiStickyNoteFill />} title={'메모'} />
            </ul>
          </SideMenu>
        </MenuContent>
      </Menu>
      <CreateClubModal show={showModals.showCreateClubModal} onCloseModal={() => handleModal('showCreateClubModal')} />
      <CreatePostModal show={showModals.showCreatePostModal} onCloseModal={() => handleModal('showCreatePostModal')} />
      <CreateMemoModal show={showModals.showCreateMemoModal} onCloseModal={() => handleModal('showCreateMemoModal')} />
      {/*<CreateReelsModal show={showModal.showCreateReelsModal} onCloseModal={() => handleModal('showCreateReelsModal')} />*/}
      {/*<CreateRoomModal show={showModal.showCreateRoomModal} onCloseModal={() => handleModal('showCreateRoomModal')} />*/}
    </>
  );
};

export default MenuModal;
