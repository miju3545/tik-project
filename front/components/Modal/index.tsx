import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: () => void;
}

export const ModalBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
`;

const Modal: FC<IProps> = ({ children, show, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <ModalBase onClick={onCloseModal}>
      <div onClick={stopPropagation}>{children}</div>
    </ModalBase>
  );
};

export default Modal;
