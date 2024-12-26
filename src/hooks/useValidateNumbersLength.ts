import { useState } from 'react';
import { LOTTO } from '../constants/lotto';

const useValidateNumbersLength = () => {
  const [isValid, setIsValid] = useState(true);

  const validateNumbersLength = (numbers: string[]) => {
    if (numbers.length !== LOTTO.COUNT) {
      alert(`${LOTTO.COUNT}개의 번호를 입력해 주세요!`);
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateNumbersLength };
};

export default useValidateNumbersLength;
