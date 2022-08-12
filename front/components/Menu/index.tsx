import React, { CSSProperties, FC, useCallback } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  show: boolean | { [key: string]: boolean }[];
  onCloseModal: () => void;
  style?: CSSProperties;
}

export const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
`;

const Menu: FC<IProps> = ({ children, show, onCloseModal, style }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <Base onClick={onCloseModal} style={style}>
      <div onClick={stopPropagation}>{children}</div>
    </Base>
  );
};

export default Menu;
