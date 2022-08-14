import React, { CSSProperties } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Base, Header, Main } from '@components/Header/ModalContent/style';

interface IProps {
  title: string;
  show: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
  style?: CSSProperties;
}

const ModalContent = ({ title, children, show, onCloseModal, style }: IProps) => {
  if (!show) return null;

  return (
    <Base style={style}>
      <Header>
        <h1>{title}</h1>
        <span className={'close-button'} onClick={onCloseModal}>
          <IoCloseOutline />
        </span>
      </Header>
      <Main>{children}</Main>
    </Base>
  );
};

export default ModalContent;
