import { useEffect, useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState<number>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter == 0) {
      setIsDisabled(false);
      setCounter(null);
    }
  }, [counter]);
  return {counter, setCounter, isDisabled, setIsDisabled};
};
export default useCounter;
