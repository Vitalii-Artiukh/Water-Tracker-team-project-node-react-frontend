import { useCallback, useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    },
    [ref, callback]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);
};
