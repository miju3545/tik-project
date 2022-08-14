import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  register: any;
  isValue: boolean;
  placeholder: string;
}

export const Base = styled.textarea<{ [key: string]: any }>`
  width: 100%;
  min-height: ${({ isValue }) => (isValue ? '80px' : '120px')};
  resize: unset;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ isValue }) => (isValue ? '16px' : '22px')};
  border: none;
  transition: 0.2s;

  &::placeholder {
    font-size: 22px;
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = ({ register, isValue, placeholder }: IProps) => {
  return <Base {...register} isValue={isValue} placeholder={placeholder} />;
};

export default TextArea;
