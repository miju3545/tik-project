import styled from '@emotion/styled';

export const Base = styled.header<{ theme: any }>`
  width: 100%;
  height: 58px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 20px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 0 20px;
  position: fixed;
  z-index: 2000;

  > ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    > li {
      width: 33.3%;
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
    }

    > li.left-menu {
      > a {
        margin-right: 10px;
      }
    }
    > li.mid-menu {
      > div {
        display: block;
        width: 33.3%;
      }
    }
    > li.right-menu {
      justify-content: flex-end;
      > div {
        margin-left: 10px;
      }
    }
  }
`;
