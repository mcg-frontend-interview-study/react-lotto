import { useState } from 'react';
import { LOTTO } from '../constants/lotto';

const useValidateUnit = () => {
  const [isValid, setIsValid] = useState(true);

  const validateUnit = (numberValue: number) => {
    if (
      0 < numberValue % LOTTO.AMOUNT_MIN &&
      numberValue % LOTTO.AMOUNT_MIN < LOTTO.AMOUNT_MIN
    ) {
      alert(`${LOTTO.AMOUNT_MIN} 단위의 금액만 입력해 주세요!`);
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateUnit };
};

export default useValidateUnit;
