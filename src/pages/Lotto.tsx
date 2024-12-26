import * as Styled from './Lotto.style';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { InputOrderAmount } from '../components/InputOrderAmount/InputOrderAmount';
import { useBuyLotto } from '../hooks/useBuyLotto';
import { ShowMyTickets } from '../components/ShowMyTickets/ShowMyTickets';
import { InputWinNumbers } from '../components/InputWinNumbers/InputWinNumbers';
import { useReducer, useState } from 'react';
import { StatisticsModal } from '../components/StatisticsModal/StatisticsModal';
import { useInputWinNumbers } from '../hooks/useInputWinNumbers';
import { LottoRank } from '../types/ServiceType';

const getRank = (compareSet: Set<number>, bonusNumber: number): LottoRank => {
  if (compareSet.size >= 10) return { rank: 0, price: 0 };
  if (compareSet.size === 9) return { rank: 5, price: 5000 };
  if (compareSet.size === 8) return { rank: 4, price: 50000 };
  if (compareSet.size === 6) return { rank: 1, price: 2000000000 };

  if (compareSet.size === 7) {
    if (compareSet.has(bonusNumber)) {
      return { rank: 2, price: 30000000 };
    } else {
      return { rank: 3, price: 1500000 };
    }
  }

  return { rank: 0, price: 0 };
};

export const Lotto = () => {
  const { amountInput, setAmountInput, buyLotto, lottoTickets } = useBuyLotto();
  const { winNumbers, bonusNumber, ...rest } = useInputWinNumbers();
  const [lottoStatistics, setLottoStatistics] = useState<LottoRank[]>([]);

  const compareTicketAndWinNumbers = () => {
    setLottoStatistics([]);

    lottoTickets.forEach((lottoTicket) => {
      const compareSet = new Set<number>([...winNumbers, ...lottoTicket]);
      const rank = getRank(compareSet, bonusNumber);
      setLottoStatistics((prev) => [...prev, rank]);
    });
  };

  const [isModalOpen, setIsModalOpen] = useReducer((state: boolean) => !state, false);

  const handleModalState = () => {
    setIsModalOpen();
  };

  return (
    <Styled.Page>
      <Header />
      <Styled.Main>
        <Styled.Title>🎱 내 번호 당첨 확인 🎱</Styled.Title>
        <InputOrderAmount amountInput={amountInput} setAmountInput={setAmountInput} buyLotto={buyLotto} />
        {lottoTickets.length > 0 && (
          <>
            <ShowMyTickets lottoTickets={lottoTickets} />
            <InputWinNumbers
              {...rest}
              compareTicketAndWinNumbers={compareTicketAndWinNumbers}
              handleModalState={handleModalState}
            />
          </>
        )}
      </Styled.Main>
      <Footer />
      {isModalOpen && <StatisticsModal lottoStatistics={lottoStatistics} close={handleModalState} />}
    </Styled.Page>
  );
};
