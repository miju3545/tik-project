import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import styled from '@emotion/styled';

interface IProps {
  location: string;
  onClick: () => void;
}

export const Base = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  > .container {
    display: flex;
    align-items: flex-start;
    //background-color: #fcccd2;
    background-color: #efefef;
    border: 1px solid #efefef;
    padding: 3px 10px 3px 8px;
    border-radius: 20px;
    height: 28px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      border-color: #dfdfdf;
      //> .icon {
      //color: #f5533d;
      //}
    }

    > .icon {
      font-size: 18px;
      margin-right: 3px;
      color: gray;
      transition: 0.2s;
    }

    > .location {
      font-size: 11px;
      line-height: 20px;
      font-weight: 600;
    }
  }
`;
const PingButton = ({ location, onClick }: IProps) => {
  return (
    <Base>
      <div className={'container'}>
        <span className={'icon'}>
          <HiLocationMarker />
        </span>
        <span className={'location'} onClick={onClick}>
          {location}
        </span>
      </div>
    </Base>
  );
};

export default PingButton;
