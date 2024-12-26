import { useState } from 'react';
import { LOTTO } from '../constants/lotto';

const useValidateRange = () => {
  const [isValid, setIsValid] = useState(true);

  const validateRange = (numberValue: number) => {
    if (numberValue < LOTTO.AMOUNT_MIN || numberValue > LOTTO.AMOUNT_MAX) {
      alert(
        `${LOTTO.AMOUNT_MIN} 이상 ${LOTTO.AMOUNT_MAX} 이하의 값만 입력해 주세요!`,
      );
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateRange };
};

export default useValidateRange;
