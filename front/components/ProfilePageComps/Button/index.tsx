import React, { CSSProperties, useMemo } from 'react';
import styled from '@emotion/styled';

interface IProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
  style?: CSSProperties;
}

export const Base = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 8px 10px;
  background-color: #e4e6ea;
  border: none;
  border-radius: 4px;
  > .icon {
    font-size: 15px;
  }
  > .title {
    margin-left: 5px;
    font-size: 13px;
  }
`;

const Button = ({ icon, title, style, onClick }: IProps) => {
  return (
    <Base style={useMemo(() => style, [])} onClick={onClick}>
      <span className={'icon'}>{icon}</span>
      <span className={'title'}>{title}</span>
    </Base>
  );
};

export default Button;
