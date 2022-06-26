import { useCallback, useRef, useState } from 'react';
export default function useDebounce(callback, delay) {
  const timer = useRef();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedCallback = useCallback(
    async (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(async () => {
        setLoading(true);
        const response = await callback(...args);
        setLoading(false);
        setResult(response);
      }, delay);
    },
    [callback, delay]
  );

  return [debouncedCallback, result, loading];
}
