import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: React.ReactNode;
  label: string;
  style?: CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

export const HoverLabelBase = styled.div`
  position: relative;

  > .target:hover + .hover-label {
    opacity: 1;
  }

  > .hover-label {
    opacity: 0;
    position: absolute;
    top: 44px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    transition: 0.2s;
  }
`;
const HoverLabel: FC<IProps> = ({ children, label, style, onClick, rest }) => {
  return (
    <HoverLabelBase onClick={onClick} {...rest}>
      <div className={'target'}>{children}</div>
      <div className={'hover-label'} style={style}>
        {label}
      </div>
    </HoverLabelBase>
  );
};

export default HoverLabel;
