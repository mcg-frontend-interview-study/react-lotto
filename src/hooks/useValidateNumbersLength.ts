import { useState } from 'react';

const useValidateNumbersLength = () => {
  const [isValid, setIsValid] = useState(true);

  const validateNumbersLength = (numbers: string[], count: number) => {
    if (numbers.length !== count) {
      alert(`${count}개의 번호를 입력해 주세요!`);
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateNumbersLength };
};

export default useValidateNumbersLength;
