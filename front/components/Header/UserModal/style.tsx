import styled from '@emotion/styled';

export const ProfileInfo = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
  margin-bottom: 12px;

  > #profile-itself {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    transition: 0.2s;

    > .avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: gray;
    }

    > .detail {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      > .nickname {
        font-size: 16px;
        font-weight: 800;
      }
      > .state {
        font-size: 14px;
      }
    }
  }

  > .divider {
    width: 100%;
    display: block;
    border-top: 1px solid #dfdfdf;
    margin: 5px 0;
  }

  > #profile-itself:hover {
    background-color: rgb(239, 239, 239);
  }
`;

export const MenuUl = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #fff;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > .prev-button {
    font-size: 24px;
    cursor: pointer;
  }
  > h1 {
    font-size: 22px;
    font-weight: 700;
    margin-left: 12px;
  }
`;

export const BlueTextButton = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;
  color: #0e73cc;

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;
