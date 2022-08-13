import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ToggleButton from '@components/Header/ToggleButton';
import PingButton from '@components/Header/CreatePostModal/PingButton';

interface IProps {
  register: any;
  isValue: boolean;
  location?: string;
  onClick?: any;
}

export const Base = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 70px;

  > .avatar {
    > a {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      color: gray;
      background-color: #e4e6ea;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: #dfdfdf;
      }
    }
  }

  > .detail {
    margin: 0 14px 0 10px;

    > .nickname {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

const UserInfoHeader = ({ register, isValue, location, onClick }: IProps) => {
  const userData = { id: 1, nickname: 'example', email: 'example@gmail.com' };
  return (
    <Base>
      <div className={'avatar'}>
        <Link to={`/${userData.nickname}`}>
          <FaUser />
        </Link>
      </div>
      <div className={'detail'}>
        <span className={'nickname'}>{userData.nickname}</span>
        <ToggleButton register={register} isValue={isValue} />
      </div>
      {location && <PingButton location={location} onClick={onClick} />}
    </Base>
  );
};

export default UserInfoHeader;
