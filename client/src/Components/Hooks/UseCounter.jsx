import { useEffect, useState } from "react";

const useCounter = (type) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < type) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 90);

    return () => {
      clearInterval(interval);
    };
  });

  return counter;
};

export default useCounter;
