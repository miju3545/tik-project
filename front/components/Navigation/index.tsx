import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import MenuItem from '@components/Header/MenuItem';
import { AiFillMessage } from 'react-icons/ai';

interface IProps {
  OnDragOver: any;
  OnDrop: any;
}

export const Base = styled.nav`
  padding: 10px;
  > ul {
    position: fixed;
    //float: left;
    width: 260px;

    > li {
      &:hover {
        background-color: #caccd2;
      }
    }
  }
`;

export const MyPings = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = ({ OnDragOver, OnDrop }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };

  return (
    <Base>
      <ul>
        <MenuItem url={`/${userData.nickname}`} icon={''} title={`${userData.nickname}`} />
        <MenuItem icon={''} title={'친구 찾기'} />
        <MenuItem icon={''} title={'과거의 오늘'} />
        <MenuItem icon={''} title={'그룹'} />
        <MenuItem icon={''} title={'Watch'} />
        <MenuItem icon={''} title={'저장됨'} />
        <MenuItem icon={''} title={'페이지'} />
        <MenuItem icon={''} title={'이벤트'} />
        <MenuItem icon={''} title={'최신'} />
        <MenuItem icon={''} title={'즐겨찾기'} />
        <MenuItem icon={'/memos'} title={'메모장'} />
        <MenuItem url={'/dm'} icon={<AiFillMessage />} title={'채팅'} />
        <MyPings onDragOver={OnDragOver} onDrop={OnDrop}>
          My pings
        </MyPings>
      </ul>
    </Base>
  );
};

export default Navigation;
