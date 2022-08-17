import styled from '@emotion/styled';

export const Base = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 500px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  background-color: #f6f8fa;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 22px;
    font-weight: 700;
  }
  > h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Main = styled.div`
  width: 100%;
  position: relative;
`;
