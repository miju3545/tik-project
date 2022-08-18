import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface IProps {
  title: string;
  style?: CSSProperties;
  onClick: () => void;
}

export const Base = styled.button`
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const NextButton = ({ title, onClick, style }: IProps) => {
  return (
    <Base onClick={onClick} style={style}>
      {title}
    </Base>
  );
};

export default NextButton;
