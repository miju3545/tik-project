import React from 'react';
import styled from '@emotion/styled';
import { FiArrowLeft } from 'react-icons/fi';
import { useTheme } from '@emotion/react';
import SearchForm from '@components/SearchForm';

interface IProps {
  register?: any;
  show: boolean;
  onCloseModal: () => void;
  onSubmit: () => void;
}

export const Base = styled.div`
  width: 100%;

  > form {
    display: flex;
    width: 100%;
  }
`;

export const CloseButton = styled.button<{ [key: string]: any }>`
  font-size: 18px;
  height: 36px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-8px);
  border-radius: 50%;
  border: none;
  color: ${({ theme }) => theme.colors.gray[600]};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

const SearchResultModal = ({ register, show, onCloseModal, onSubmit }: IProps) => {
  const theme = useTheme();

  if (!show) return null;

  return (
    <Base>
      <form onSubmit={onSubmit}>
        <CloseButton onClick={onCloseModal} theme={theme}>
          <FiArrowLeft />
        </CloseButton>
        <SearchForm register={register} placeholder={'Messenger 검색'} showIcon={false} style={{ padding: '15px' }} />
      </form>
    </Base>
  );
};

export default SearchResultModal;
