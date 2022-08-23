import React from 'react';
import styled from '@emotion/styled';

export const Text = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background-color: #fff;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
`;

const DragOver = () => {
  return <Text>Uploading...</Text>;
};

export default DragOver;
