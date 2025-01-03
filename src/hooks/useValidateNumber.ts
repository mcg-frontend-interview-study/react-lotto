import { useState } from 'react';

const useValidateNumber = () => {
  const [isValid, setIsValid] = useState(true);

  const validateNumber = (value: string) => {
    if (Number.isNaN(value)) {
      alert('숫자만 입력해 주세요!');
      setIsValid(false);
      return;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateNumber };
};

export default useValidateNumber;
