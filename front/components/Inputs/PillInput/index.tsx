import React, { CSSProperties, useRef } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface IProps {
  register: any;
  onDelete: () => void;
  style?: CSSProperties;
  [key: string]: any;
}

export const Base = styled.div<{ [key: string]: any }>`
  max-width: 110px;
  height: 30px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  margin-right: 10px;
  margin-bottom: 10px;

  > label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    > input {
      display: inline;
      width: 100%;
      height: 100%;
      padding-left: 12px;
      font-size: 14px;
      border: none;
      background-color: #fff;
      white-space: nowrap;
      &:focus {
        outline: none;
      }
    }

    > .delete-button {
      font-size: 22px;
      padding: 0 3px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray[500]};
      background-color: transparent;
      &:hover {
        color: ${({ theme }) => theme.colors.gray[800]};
      }
    }
  }
`;
const PillInput = ({ register, onDelete, style, rest }: IProps) => {
  const theme = useTheme();
  return (
    <Base>
      <label>
        <input type={'text'} {...register} {...rest} disabled={true} style={style} />
        <span className={'delete-button'} onClick={onDelete}>
          <IoCloseCircleOutline />
        </span>
      </label>
    </Base>
  );
};

export default PillInput;
