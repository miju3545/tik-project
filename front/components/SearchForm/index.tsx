import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { BsSearch } from 'react-icons/bs';

interface IProps {
  register: any;
  placeholder: string;
  showIcon?: boolean;
  style?: CSSProperties;
}

export const Base = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchBar = styled.label<{ [key: string]: any }>`
  width: 100%;
  height: 36px;
  background-color: #f0f2f6;
  border-radius: 20px;
  cursor: text;
  display: flex;
  align-items: center;
  overflow: hidden;

  > input {
    width: 100%;
    height: 100%;
    padding: 15px 15px 15px 15px;
    font-size: 15px;
    font-weight: 400;
    background-color: transparent;
    border: none;

    &::placeholder {
      font-size: 15px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray[500]};
    }

    &:focus {
      outline: none;
    }
  }

  > .icon {
    padding: 0 15px;
  }
`;

const SearchForm = ({ register, placeholder, showIcon = true, style }: IProps) => {
  const theme = useTheme();
  return (
    <Base>
      <SearchBar theme={theme}>
        {showIcon && (
          <span className={'icon'}>
            <BsSearch />
          </span>
        )}
        <input type={'text'} {...register} placeholder={placeholder} autoFocus={true} style={style} />
      </SearchBar>
      <button type={'submit'} hidden></button>
    </Base>
  );
};

export default SearchForm;
