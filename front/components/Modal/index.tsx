import React, { CSSProperties, FC, useCallback } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: () => void;
  style?: CSSProperties;
}

const ModalBase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5000;
`;

const Menu: FC<IProps> = ({ children, show, onCloseModal, style }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <ModalBase onClick={onCloseModal} style={style}>
      <div onClick={stopPropagation}>{children}</div>
    </ModalBase>
  );
};

export default Menu;
