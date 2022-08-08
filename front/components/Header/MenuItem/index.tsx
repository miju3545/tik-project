import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface IProps {
  icon: React.ReactNode;
  title: string;
  url: string;
}

export const MenuItemBase = styled.li`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;

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
const MenuItem: FC<IProps> = ({ icon, title, url }) => {
  return (
    <MenuItemBase>
      <Link to={url}>
        <div className={'icon'}>{icon}</div>
        <div className={'title'}>{title}</div>
      </Link>
    </MenuItemBase>
  );
};

export default MenuItem;
