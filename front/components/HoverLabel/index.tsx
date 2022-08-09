import React, { CSSProperties, FC } from 'react';
import styled from '@emotion/styled';
import { HoverLabelBase } from './style';

interface IProps {
  children: React.ReactNode;
  label: string;
  style?: CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

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
