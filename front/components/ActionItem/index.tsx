import React, { CSSProperties } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export const Base = styled.div<{ [key: string]: any }>`
  width: 41px;
  height: 41px;
  border-radius: 50%;
  background-color: ${({ theme, active }) => (active ? '#e6f3fe' : '#e4e6ea')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  transition: 0.1s;
  color: ${({ theme, active }) => (active ? theme.colors.blue[600] : theme.colors.gray[700])};

  &:hover {
    background-color: #caccd2;
  }
`;

interface IProps {
  content: string | React.ReactNode;
  style?: CSSProperties;
  active?: boolean;
  [key: string]: any;
}
const ActionItem = ({ content, style, active, rest }: IProps) => {
  const theme = useTheme();

  return (
    <Base theme={theme} style={style} active={active} {...rest}>
      {content}
    </Base>
  );
};

export default ActionItem;
