import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import autosize from 'autosize';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  return <Base {...register} isValue={isValue} placeholder={placeholder} ref={textareaRef} />;
};

export default TextArea;
