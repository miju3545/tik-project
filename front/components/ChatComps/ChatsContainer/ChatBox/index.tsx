import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IProps {
  register: any;
}

export const Base = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 18%;
  padding: 10px 20px;

  > .container {
    width: 100%;
    height: 100%;
    //background-color: #f0f2f6;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.gray[100]};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    overflow: hidden;

    > .toolbox {
      width: 100%;
      height: 38px;
      background-color: gray;
    }
    > textarea {
      width: 100%;
      height: 100%;
      padding: 10px;
      resize: unset;
      font-family: 'Poppins', sans-serif;
      border: none;
      transition: 0.2s;

      &::placeholder {
        font-size: 15px;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;

const ChatBox = ({ register }: IProps) => {
  const theme = useTheme();
  return (
    <Base theme={theme}>
      <div className={'container'}>
        <ul className={'toolbox'}>toolbox</ul>
        <textarea {...register} placeholder={'Aa'} autoFocus={true} />
      </div>
    </Base>
  );
};

export default ChatBox;
