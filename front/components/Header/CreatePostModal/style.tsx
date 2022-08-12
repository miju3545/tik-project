import styled from '@emotion/styled';

export const FormContainer = styled.div`
  padding: 0 20px 20px;
  width: 100%;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const InputBox = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > textarea {
    width: 100%;
    min-height: ${({ isInputValues }) => (isInputValues ? '80px' : '120px')};
    resize: unset;
    font-family: 'Poppins', sans-serif;
    font-size: ${({ isInputValues }) => (isInputValues ? '16px' : '22px')};
    border: none;
    transition: 0.2s;

    &::placeholder {
      font-size: 22px;
    }

    &:focus {
      outline: none;
    }
  }

  > .dropper {
  }
`;

export const ToolBox = styled.div`
  width: 100%;
  padding: 14px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  height: 54px;
  margin-top: 20px;

  > .title {
    font-weight: 600;
  }

  > ul {
    display: flex;
  }

  &:hover {
    border-color: darkgray;
  }
`;

export const ToolItem = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-left: 3px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? '#e4e6ea' : '#1676f2')};
  height: 38px;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  font-weight: 600;
  transition: 0.2s;
  cursor: pointer;
`;
