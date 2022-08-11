import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  register: any;
  isValue: boolean;
}

export const Base = styled.label<{ [key: string]: any }>`
  > .outer-circle {
    width: 66px;
    height: 28px;
    background-color: ${({ isValue }) => (isValue ? '#0295f6' : '#8e8e8e')};
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    padding: 3px;

    > .state {
      position: absolute;
      font-size: 12px;
      color: #fff;
      top: 5px;
      font-weight: 500;
      opacity: 0.8;
      ${({ isValue }) => (isValue ? 'left: 13px' : 'right: 7px')};
    }
    > .toggle-button {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.4s;
      transform: ${({ isValue }) => (isValue ? 'translateX(38px)' : 0)};
    }
  }
`;

const ToggleButton = ({ register, isValue }: IProps) => {
  return (
    <Base isValue={isValue}>
      <div className={'outer-circle'}>
        <span className={'state'}>{isValue ? '공개' : '비공개'}</span>
        <div className={'toggle-button'}></div>
        <input type={'checkbox'} {...register} hidden />
      </div>
    </Base>
  );
};

export default ToggleButton;
