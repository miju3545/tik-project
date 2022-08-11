import { useCallback, useState } from 'react';

const useInput = (initialValue: any, type = 'text') => {
  const [state, setState] = useState(initialValue);
  const handler = useCallback((e: any) => {
    setState(type === 'file' ? e.target.files : type === e.target.value);
  }, []);

  return [state, handler, setState];
};

export default useInput;
