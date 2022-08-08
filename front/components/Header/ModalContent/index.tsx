import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  title?: string;
}

export const Base = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 500px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 22px;
    font-weight: 700;
  }
  > h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Main = styled.div`
  width: 100%;
  position: relative;
`;

const ModalContent: FC<IProps> = ({ children, style, title }) => {
  return (
    <Base style={style}>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Main>{children}</Main>
    </Base>
  );
};

export default ModalContent;
