import { useEffect, useState } from "react";

const useIncrCounter = (type) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < type) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  });

  return counter;
};

export default useIncrCounter;
