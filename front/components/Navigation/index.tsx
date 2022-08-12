import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import MenuItem from '@components/Header/MenuItem';

export const Base = styled.nav`
  padding: 10px;

  > ul {
    position: fixed;
    width: 260px;

    > li {
      &:hover {
        background-color: #caccd2;
      }
    }
  }
`;

const Navigation = () => {
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
        <MenuItem icon={''} title={'메모장'} />
      </ul>
    </Base>
  );
};

export default Navigation;
