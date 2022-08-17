import React, { FC, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import SearchResultModal from '../SearchResultModal';
import { BsSearch } from 'react-icons/bs';
import { useTheme } from '@emotion/react';

interface IProps {
  register?: any;
  handleModal: any;
  [key: string]: any;
}

export const Base = styled.div`
  width: 100%;
`;

export const SearchBar = styled.div<{ [key: string]: any }>`
  width: 100%;
  height: 36px;
  background-color: #f0f2f6;
  border-radius: 20px;
  cursor: text;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[600]};

  > .icon {
    padding: 0 15px;
  }
  > .placeholder-text {
    font-size: 14px;
    font-weight: 400;
  }
`;

const SearchBox: FC<IProps> = ({ register, handleModal }) => {
  const theme = useTheme();

  return (
    <Base>
      <SearchBar theme={theme} onClick={() => handleModal('showSearchResultModal')}>
        <span className={'icon'}>
          <BsSearch />
        </span>
        <span className={'placeholder-text'}>Messenger 검색</span>
      </SearchBar>
    </Base>
  );
};

export default SearchBox;
