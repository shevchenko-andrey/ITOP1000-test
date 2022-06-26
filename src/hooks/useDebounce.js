import { useCallback, useRef, useState } from 'react';
export default function useDebounce(callback, delay) {
  const timer = useRef();
  const [result, setResult] = useState(null);
  const debouncedCallback = useCallback(
    async (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(async () => {
        const response = await callback(...args);
        console.log('fack', response);
        setResult(response);
      }, delay);
    },
    [callback, delay]
  );

  return [debouncedCallback, result];
}
