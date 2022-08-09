import React, { CSSProperties } from 'react';
import { useLocation } from 'react-router';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { HeaderItemBase } from '@components/Header/HeaderItem/style';

interface IProps {
  content: { outline: React.ReactNode; fill: React.ReactNode };
  style?: CSSProperties;
  url: string;
}

const HeaderItem = ({ content, url, style }: IProps) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  return (
    <HeaderItemBase theme={theme} active={pathname === url}>
      <Link to={url}>{pathname === url ? content.fill : content.outline}</Link>
    </HeaderItemBase>
  );
};

export default HeaderItem;
