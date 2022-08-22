import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

export const Base = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ show }) => (show ? '360px' : '0px')};
  bottom: 0;
  border-left: 1px solid #dfdfdf;
  transition: 0.2s;
  background-color: #fff;

  > .top {
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    > button {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 27px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: 0.2s;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.gray[700]};

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray[100]};
      }
    }
  }
`;

const SideMenu = ({ show, onCloseModal }: IProps) => {
  return (
    <Base show={show}>
      <div className={'top'}>
        <button onClick={onCloseModal}>
          <MdClose />
        </button>
      </div>
    </Base>
  );
};

export default SideMenu;
