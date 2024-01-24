import { useEffect, useRef, useState } from 'react';

export const useSyncSessionStorage = (
  key: string,
  state: any,
  setState: any
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    const storedState = sessionStorage.getItem(key);

    if (storedState) {
      const initialState = JSON.parse(storedState);
      setState(initialState);
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      sessionStorage.setItem(key, JSON.stringify(state));
    } else {
      isMounted.current = true;
    }
  }, [key, state]);
};
