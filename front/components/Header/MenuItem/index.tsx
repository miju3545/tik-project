import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface IProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
  onClick?: () => void;
}

export const MenuItemBase = styled.li`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;

  > a,
  button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    border: none;
    > .icon {
      margin-right: 10px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: #e4e6ea;
      color: #1d1f23;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 19px;
    }

    > .title {
      font-size: 15px;
      font-weight: 600;
    }
  }

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;

export const LogoutButton = styled(MenuItemBase)``;

const MenuItem: FC<IProps> = ({ icon, title, url, onClick }) => {
  return (
    <MenuItemBase>
      {url === undefined && onClick !== undefined ? (
        <button onClick={onClick}>
          <div className={'icon'}>{icon}</div>
          <div className={'title'}>{title}</div>
        </button>
      ) : (
        <Link to={url || ''}>
          <div className={'icon'}>{icon}</div>
          <div className={'title'}>{title}</div>
        </Link>
      )}
    </MenuItemBase>
  );
};

export default MenuItem;
