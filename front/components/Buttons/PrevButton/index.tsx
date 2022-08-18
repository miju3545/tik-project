import React, { CSSProperties } from 'react';
import { ImArrowLeft2 } from 'react-icons/im';

import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IProps {
  style?: CSSProperties;
  onClick: () => void;
}

export const Base = styled.button<{ [key: string]: any }>`
  width: 42px;
  height: 42px;
  font-size: 24px;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

const PrevButton = ({ onClick, style }: IProps) => {
  const theme = useTheme();
  return (
    <Base onClick={onClick} style={style} theme={theme}>
      <ImArrowLeft2 />
    </Base>
  );
};

export default PrevButton;
