import styled from '@emotion/styled';

export const MenuItemBase = styled.li`
  width: 100%;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;

  > a,
  button {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    > .icon {
      margin-right: 10px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background-color: #e4e6ea;
      color: #1d1f23;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 19px;
    }

    > .title {
      font-size: 15px;
      font-weight: 600;
    }
  }

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;
