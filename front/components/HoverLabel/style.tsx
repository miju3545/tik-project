import styled from '@emotion/styled';

export const HoverLabelBase = styled.div`
  position: relative;
  z-index: 4000;

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
