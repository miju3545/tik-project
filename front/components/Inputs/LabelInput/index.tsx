import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  label: string;
  register: any;
  [key: string]: any;
}

export const Base = styled.div`
  width: 100%;

  > label {
    width: 100%;
    display: flex;
    flex-direction: column;

    > .label-text {
      margin-bottom: 4px;
      font-size: 14px;
      font-weight: 600;
    }
    > input {
      padding: 12px;
      width: 100%;
      font-size: 15px;

      &:focus {
        outline: none;
      }
    }
  }
`;

const LabelInput = ({ label, register, rest }: IProps) => {
  return (
    <Base>
      <label>
        <span className={'label-text'}>{label}</span>
        <input type={'text'} {...register} {...rest} />
      </label>
    </Base>
  );
};

export default LabelInput;
