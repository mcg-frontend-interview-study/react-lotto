import { useState } from 'react';

const useValidateRange = () => {
  const [isValid, setIsValid] = useState(true);

  const validateRange = (numberValue: number, min: number, max: number) => {
    if (numberValue < min || numberValue > max) {
      alert(`${min} 이상 ${max} 이하의 값만 입력해 주세요!`);
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
  };

  return { isValid, validateRange };
};

export default useValidateRange;
