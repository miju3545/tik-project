import React, { createContext } from 'react';

interface IContext {
  [key: string]: any;
}

interface IProps {
  children: React.ReactNode;
}

export const CreatePostContext = createContext<IContext>({});

const CreatePostProvider = ({ children }: IProps) => {
  const value = {};
  return <CreatePostContext.Provider value={value}>{children}</CreatePostContext.Provider>;
};

export default CreatePostProvider;
