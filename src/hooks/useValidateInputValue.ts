import { useState } from 'react';
import useValidateRange from './useValidateRange';
import useValidateNumber from './useValidateNumber';
import useValidateUnit from './useValidateUnit';
import { LOTTO } from '../constants/lotto';

const useValidateInputValue = (initialValue: string) => {
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState(initialValue);
  const { validateRange } = useValidateRange();
  const { validateNumber } = useValidateNumber();
  const { validateUnit } = useValidateUnit();

  const validateInputValue = (value: string) => {
    if (!validateNumber(value)) {
      setInputValue('');
      setIsValid(false);
      return;
    }

    const numberValue = Number(value);

    if (!validateRange(numberValue, LOTTO.AMOUNT_MIN, LOTTO.AMOUNT_MAX)) {
      setInputValue('');
      setIsValid(false);
      return;
    }
    if (!validateUnit(numberValue)) {
      setInputValue('');
      setIsValid(false);
      return;
    }

    setInputValue(value);
    setIsValid(true);
    return numberValue;
  };

  return { inputValue, validateInputValue, isValid };
};

export default useValidateInputValue;
