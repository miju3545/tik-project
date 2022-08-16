import styled from '@emotion/styled';

export const Base = styled.div`
  width: 100vw;
  height: 100vh;

  > #main-container {
    display: flex;
    position: absolute;
    background-color: #f0f2f6;
    top: 58px;
    left: 0;
    right: 0;
  }
`;

export const Main = styled.main`
  flex: 1.5;
  height: 10000px;
  border: 1px solid #dfdfdf;
`;

export const SideMenu = styled.div`
  flex: 1;
`;
export const LeftMenu = styled(SideMenu)`
  float: left;
`;
export const RightMenu = styled(SideMenu)`
  float: right;
`;
