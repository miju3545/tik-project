import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Base = styled.div<{ [key: string]: any }>`
  position: relative;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[100]};

  > .or {
    font-size: 12px;
    color: gray;
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    padding: 0 14px;
    background-color: #fff;
  }

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SocialButton = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin: 0 4px;
  cursor: pointer;
`;
const SocialLinks = () => {
  const socials = [{ name: 'kakao' }, { name: 'naver' }, { name: 'google' }];
  const theme = useTheme();
  return (
    <Base theme={theme}>
      <span className={'or'}>또는</span>
      <ul>
        {socials.map((social, idx) => (
          <SocialButton key={idx}>{social.name}</SocialButton>
        ))}
      </ul>
    </Base>
  );
};

export default SocialLinks;
