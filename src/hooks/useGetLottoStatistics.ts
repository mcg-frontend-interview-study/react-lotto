import { useState } from 'react';
import { LottoRank, LottoTicket } from '../types/ServiceType';

type UseGetLottoStatisticsArgs = {
  lottoTickets: LottoTicket[];
  winNumbers: LottoTicket;
  bonusNumber: number;
};

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

export const useGetLottoStatistics = ({ lottoTickets, winNumbers, bonusNumber }: UseGetLottoStatisticsArgs) => {
  const [lottoStatistics, setLottoStatistics] = useState<LottoRank[]>([]);

  const compareTicketAndWinNumbers = () => {
    setLottoStatistics([]);

    lottoTickets.forEach((lottoTicket) => {
      const compareSet = new Set<number>([...winNumbers, ...lottoTicket]);
      const rank = getRank(compareSet, bonusNumber);
      setLottoStatistics((prev) => [...prev, rank]);
    });
  };

  return {
    lottoStatistics,
    compareTicketAndWinNumbers,
  };
};
