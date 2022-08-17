import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

interface IProps {
  url: string;
  title: string;
  style?: CSSProperties;
}

export const Base = styled.li<{ [key: string]: any }>`
  width: 100%;
  height: 40px;

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    line-height: 15px;

    > .setting-item {
      font-size: 15px;
      font-weight: 500;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;

const MenuModalItem = ({ url, title, style }: IProps) => {
  const theme = useTheme();
  return (
    <Base theme={theme}>
      <Link to={url} style={style}>
        <span className={'setting-item'}>{title}</span>
      </Link>
    </Base>
  );
};

export default MenuModalItem;
