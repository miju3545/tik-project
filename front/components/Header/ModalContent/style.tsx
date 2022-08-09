import styled from '@emotion/styled';

export const Base = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Header = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  position: relative;

  > h1 {
    font-size: 20px;
  }

  > .close-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    font-size: 30px;
    color: gray;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #e4e6ea;
    cursor: pointer;
    transition: 0.2s;
  }

  > .prev-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 30px;
    color: gray;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #e4e6ea;
    cursor: pointer;
    transition: 0.2s;
  }

  > .close-button:hover,
  .prev-button:hover {
    background-color: #dfdfdf;
  }
`;

export const Main = styled.div`
  width: 100%;
  position: relative;
`;
