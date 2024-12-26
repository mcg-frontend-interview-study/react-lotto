import { useState } from 'react';
import useValidateRange from './useValidateRange';
import useValidateNumber from './useValidateNumber';
import useValidateUnit from './useValidateUnit';

const useValidateInputValue = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const { validateRange } = useValidateRange();
  const { validateNumber } = useValidateNumber();
  const { validateUnit } = useValidateUnit();

  const validateInputValue = (value: string) => {
    const numberValue = Number(value);
    if (!validateRange) {
      setInputValue('');
      return;
    }
    if (!validateNumber) {
      setInputValue('');
      return;
    }
    if (!validateUnit) {
      setInputValue('');
      return;
    }

    setInputValue(value);
    return numberValue;
  };

  return { inputValue, validateInputValue };
};

export default useValidateInputValue;
