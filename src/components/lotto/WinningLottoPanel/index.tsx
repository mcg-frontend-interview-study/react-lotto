import * as S from './styles';
import { LOTTO_INFO } from '../../constants/lotto';
import { Input, Button } from '../../common';
import { useState } from 'react';

interface InputContainerProps {
  label: string;
  count: number;
  values: string | string[]; // 그냥 배열로 통일하자 ...
  onChange: (index: number, value: string) => void;
}
const InputContainer = ({ label, count, values, onChange }: InputContainerProps) => {
  return (
    <S.NumberContainer>
      <S.NumberLabel>{label}</S.NumberLabel>
      <S.NumberInputContainer>
        {Array.from({ length: count }).map((_, index) => (
          <Input
            key={index}
            maxLength={2}
            value={Array.isArray(values) ? values[index] : values}
            onChange={(e) => onChange(index, e.target.value)}
            $style={{ width: '35px', height: '30px', padding: '3px 5px', textAlign: 'center' }}
          />
        ))}
      </S.NumberInputContainer>
    </S.NumberContainer>
  );
};

interface WinningLottoPanelProps {
  setWinningNumber: (numbers: number[], bonusNumber: number) => void;
}

const WinningLottoPanel = ({ setWinningNumber }: WinningLottoPanelProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winningLotto, setWinningLotto] = useState<string[]>(Array(LOTTO_INFO.count).fill(''));
  const [bonusNumber, setBonusNumber] = useState('');

  const handleWinningLottoInputChange = (index: number, value: string) => {
    setWinningLotto((prev) => {
      const updatedLotto = [...prev];
      updatedLotto[index] = value; // 해당 인덱스의 값을 업데이트
      return updatedLotto;
    });
  };

  const handleSubmit = () => {
    const numericLottos = winningLotto.map(Number);
    const numericBonusNumber = Number(bonusNumber);
    const totalNumber = [...numericLottos, numericBonusNumber];

    if (totalNumber.some((num) => num === 0)) {
      // 값이 빈 경우 ...
      alert('로또 번호 입력을 완료해주세요.');
      return;
    }

    if (numericLottos.some(isNaN) || isNaN(numericBonusNumber)) {
      alert('숫자만 입력해주세요!');
      return;
    }

    setWinningNumber(numericLottos, numericBonusNumber);
    //setIsModalOpen(!isModalOpen);
  };

  return (
    <S.WinningLottoPanel>
      <S.GuideMessage>{`지난 주 당첨번호 ${LOTTO_INFO.count}개와 보너스 번호 ${1}개를 입력해주세요.`}</S.GuideMessage>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <InputContainer
          label="당첨 번호"
          count={LOTTO_INFO.count}
          values={winningLotto}
          onChange={handleWinningLottoInputChange}
        />
        <InputContainer
          label="보너스 번호"
          count={1}
          values={[bonusNumber]}
          onChange={(_, value) => setBonusNumber(value)}
        />
      </div>
      <Button onClick={handleSubmit} $style={{ width: '90%', margin: '0 auto' }}>
        결과 확인하기
      </Button>
    </S.WinningLottoPanel>
  );
};

export default WinningLottoPanel;