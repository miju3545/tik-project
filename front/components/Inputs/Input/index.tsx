import React from 'react';
import styled from '@emotion/styled';
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { useTheme } from '@emotion/react';

interface IProps {
  type: 'text' | 'password' | 'textarea' | 'email';
  label: string;
  register: any;
  isValue: boolean;
  error: boolean;
  [key: string]: any;
}

const Base = styled.div<{ [key: string]: any }>`
  > label {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 3px;
    overflow: hidden;

    > .label {
      position: absolute;
      left: 14px;
      top: ${({ isValue }) => (isValue ? '6px' : '15px')};
      font-size: ${({ isValue }) => (isValue ? '11px' : '14px')};
      font-weight: 600;
      transition: 0.2s;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
    > input {
      height: 50px;
      font-size: 16px;
      padding: ${({ isValue, theme }) => (isValue ? '20px 12px 4px' : '12px')};
      border: none;
      &:focus {
        //outline-color: ${({ theme }) => theme.colors.blue[700]};
        outline: none;
      }
    }
    > .validation {
      position: absolute;
      top: 13px;
      right: 12px;
      font-size: 24px;

      > .error {
        color: ${({ theme }) => theme.colors.red[600]};
      }

      > .pass {
        color: ${({ theme }) => theme.colors.blue[500]};
      }
    }
  }
`;

const Input = ({ type = 'text', label, register, isValue, error }: IProps) => {
  const theme = useTheme();
  return (
    <Base theme={theme} isValue={isValue}>
      <label>
        <span className={'label'}>{label}</span>
        <input type={type} {...register} />
        {isValue && (
          <span className={'validation'}>
            {error ? <RiCloseCircleLine className={'error'} /> : <RiCheckboxCircleLine className={'pass'} />}
          </span>
        )}
      </label>
    </Base>
  );
};

export default Input;
