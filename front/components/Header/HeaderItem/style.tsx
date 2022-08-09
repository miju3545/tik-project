import styled from '@emotion/styled';

export const HeaderItemBase = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active, theme }) => (active ? `border-bottom: 3px solid ${theme.colors.blue[600]}` : null)};

  > a {
    width: 88%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 4px;

    > svg {
      font-size: 26px;
      color: ${({ theme, active }) => (active ? theme.colors.blue[600] : theme.colors.gray[900])};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }
`;
