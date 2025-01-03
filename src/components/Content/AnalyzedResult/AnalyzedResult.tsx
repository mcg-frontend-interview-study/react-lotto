import { useEffect, useRef, useState } from 'react';
import useLottoContext from '../../../hooks/useLottoContext';

interface ResultsType {
  matchCount: number;
  isBonus: boolean;
}

interface ResultType {
  '6': number;
  '5': number;
  bonus: number;
  '4': number;
  '3': number;
}

const INITIAL_RESULT_VALUE = {
  '6': 0,
  '5': 0,
  bonus: 0,
  '4': 0,
  '3': 0,
};

function AnalyzedResult() {
  const { lottoNumbers, winningNumbers, bonusNumber, inputAmountValue } =
    useLottoContext();
  const [result, setResult] = useState<ResultType>(INITIAL_RESULT_VALUE);
  const hasRunEffect = useRef(false);

  const calculateResults = () => {
    return Object.values(lottoNumbers).map((values) => {
      const matchCount = values.reduce((acc: number, value: number) => {
        if (winningNumbers.includes(String(value))) {
          return acc + 1;
        }
        return acc;
      }, 0);
      const isBonus = values.includes(bonusNumber);
      return { matchCount, isBonus };
    });
  };

  const handleResult = (results: ResultsType[]) => {
    setResult((prev) => {
      const updatedResult = { ...prev };
      results.forEach(({ matchCount, isBonus }) => {
        if (isBonus && matchCount === 5) {
          updatedResult.bonus = (updatedResult.bonus ?? 0) + 1;
        } else if (matchCount === 6) {
          updatedResult['6'] = (updatedResult['6'] ?? 0) + 1;
        } else if (matchCount === 5) {
          updatedResult['5'] = (updatedResult['5'] ?? 0) + 1;
        } else if (matchCount === 4) {
          updatedResult['4'] = (updatedResult['4'] ?? 0) + 1;
        } else if (matchCount === 3) {
          updatedResult['3'] = (updatedResult['3'] ?? 0) + 1;
        }
      });
      return updatedResult;
    });
  };

  useEffect(() => {
    if (hasRunEffect.current) return;

    const results = calculateResults();
    handleResult(results);

    hasRunEffect.current = true;
  }, []);

  const calculateProfit = (result: ResultType) => {
    const prizeMoney = {
      '3': 5000,
      '4': 50000,
      '5': 1500000,
      bonus: 30000000,
      '6': 2000000000,
    };

    let totalProfit = 0;
    Object.entries(result).forEach(([key, count]) => {
      const prize = prizeMoney[key as keyof typeof prizeMoney] ?? 0;
      totalProfit += prize * count;
    });

    return totalProfit;
  };

  const calculateYield = () => {
    const totalInvestment = parseInt(inputAmountValue, 10) ?? 0;
    const totalProfit = calculateProfit(result);
    return ((totalProfit - totalInvestment) / totalInvestment) * 100;
  };

  return (
    <div>
      🏆 당첨 통계 🏆
      <>일치 갯수</>
      <>당첨금</>
      <>당첨 갯수</>
      
      {Object.entries(result).map(([key, value]) => (
        <div key={key}>
          {key === 'bonus' ? '5개+보너스볼' : `${key}개`} {value}개
        </div>
      ))}
      <>수익률: {calculateYield().toFixed(2)}%</>
    </div>
  );
}

export default AnalyzedResult;
