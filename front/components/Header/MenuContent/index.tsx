import React, { CSSProperties, FC } from 'react';
import { Base, Header, Main } from '@components/Header/MenuContent/style';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
  title?: string;
}

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
