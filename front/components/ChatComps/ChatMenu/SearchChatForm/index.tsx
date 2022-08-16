import React, { useCallback, useContext } from 'react';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';

interface IProps {
  [key: string]: any;
}

export const Base = styled.div`
  width: 100%;
  background-color: red;

  > form {
    width: 100%;
    height: 30px;
    background-color: gray;
  }
`;

const SearchChatForm = () => {
  const method = useFormContext<{ [key: string]: any }>();
  const onSubmit = useCallback(
    method.handleSubmit(() => {
      console.log('submit');
    }),
    [],
  );

  return (
    <Base>
      <form onSubmit={onSubmit}>
        <input type={'text'} {...method.register('query')} />
      </form>
    </Base>
  );
};

export default SearchChatForm;
