import React, { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { ModalBase } from '@components/Modal';

interface IProps {
  children: React.ReactNode;
  show: boolean;
  onCloseModal: () => void;
}

const Menu: FC<IProps> = ({ children, show, onCloseModal }) => {
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

export default Menu;
