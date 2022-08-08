import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { useLocation, useRouteMatch } from 'react-router';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

interface IProps {
  content: { outline: React.ReactNode; fill: React.ReactNode };
  style?: CSSProperties;
  url: string;
}

export const HeaderItemBase = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active, theme }) => (active ? `border-bottom: 3px solid ${theme.colors.blue[600]}` : null)};

  > a {
    width: 88%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 4px;

    > svg {
      font-size: 26px;
      color: ${({ theme, active }) => (active ? theme.colors.blue[600] : theme.colors.gray[900])};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

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
