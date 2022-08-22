import styled from '@emotion/styled';

export const Container = styled.div<{ [key: string]: any }>`
  position: absolute;
  top: 0;
  left: 360px;
  right: ${({ show }) => (show ? '360px' : 0)};
  bottom: 0;
  transition: 0.2s;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 44px);
  flex-flow: column;
`;
