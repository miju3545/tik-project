import React, { CSSProperties } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Base, Header, Main } from '@components/Header/ModalContent/style';

interface IProps {
  title: string;
  show: boolean;
  children: React.ReactNode;
  onCloseModal: () => void;
  style?: CSSProperties;
}

const PrevModalContent = ({ title, children, show, onCloseModal, style }: IProps) => {
  if (!show) return null;
  return (
    <Base style={style}>
      <Header>
        <h1>{title}</h1>
        <span className={'prev-button'} onClick={onCloseModal}>
          <FiArrowLeft />
        </span>
      </Header>
      <Main>{children}</Main>
    </Base>
  );
};

export default PrevModalContent;
