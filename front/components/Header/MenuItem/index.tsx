import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemBase } from '@components/Header/MenuItem/style';

interface IProps {
  icon: React.ReactNode;
  title: string;
  url?: string;
  onClick?: () => void;
}

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
