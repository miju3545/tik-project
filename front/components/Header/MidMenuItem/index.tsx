import React, { CSSProperties, FC } from 'react';
import { useLocation } from 'react-router';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Base } from '@components/Header/MidMenuItem/style';

interface IProps {
  content: { outline: React.ReactNode; fill: React.ReactNode };
  style?: CSSProperties;
  url: string;
}

const HeaderItem: FC<IProps> = ({ content, url, style }) => {
  const { pathname } = useLocation();
  const theme = useTheme();
  return (
    <Base theme={theme} active={pathname === url} style={style}>
      <Link to={url}>{pathname === url ? content.fill : content.outline}</Link>
    </Base>
  );
};

export default HeaderItem;
