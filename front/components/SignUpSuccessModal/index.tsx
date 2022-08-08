import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface IProps {
  show: boolean;
  onCloseModal: () => void;
}

export const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;

  > .container {
    width: 380px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    > .header {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h1 {
        font-size: 24px;
      }

      > .question {
        margin-top: 10px;
        color: gray;
      }
    }

    > .answers {
      display: flex;
      width: 100%;
      background-color: gray;
      height: 50px;
      border-top: 1px solid gray;
      > button {
        width: 50%;
        font-size: 15px;
        font-weight: 600;
        border: none;
        cursor: pointer;
      }

      > button.no {
        // color: ${({ theme }) => theme.colors.red[600]};
      }

      > button.yes {
        border-left: 1px solid gray;
        color: ${({ theme }) => theme.colors.blue[600]};
      }
    }
  }
`;
const SignUpSuccessModal = ({ show, onCloseModal }: IProps) => {
  if (!show) return null;
  const theme = useTheme();
  return (
    <Base theme={theme}>
      <div className={'container'}>
        <div className={'header'}>
          <h1>가입을 축하합니다 🎉</h1>
          <span className={'question'}>바로 로그인하시겠어요?</span>
        </div>
        <div className={'answers'}>
          <button onClick={onCloseModal} className={'no'}>
            아니요
          </button>
          <button onClick={onCloseModal} className={'yes'}>
            네
          </button>
        </div>
      </div>
    </Base>
  );
};
export default SignUpSuccessModal;
