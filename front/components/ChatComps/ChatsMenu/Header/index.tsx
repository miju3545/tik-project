import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  title: string;
  children: React.ReactNode;
}
export const Base = styled.header`
  width: 100%;
  height: 62px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
    font-size: 22px;
    font-weight: 700;
  }
`;

const Header = ({ children, title }: IProps) => {
  return (
    <Base>
      <h2 className={'title'}>{title}</h2>
      {children}
    </Base>
  );
};

export default Header;
