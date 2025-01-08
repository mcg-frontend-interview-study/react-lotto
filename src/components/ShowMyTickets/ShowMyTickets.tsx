import * as Styled from './ShowMyTickets.style';
import { LottoTicket } from '../../types/ServiceType';

type ShowMyTicketsProps = {
  lottoTickets: LottoTicket[];
};

export const ShowMyTickets = ({ lottoTickets }: ShowMyTicketsProps) => {
  return (
    <Styled.Container>
      <Styled.Text>{`총 ${lottoTickets.length}개를 구매하였습니다.`}</Styled.Text>
      <Styled.Tickets>
        {lottoTickets.map((lottoTicket, index) => (
          <Styled.Ticket key={index}>🎟️ {lottoTicket.join(', ')}</Styled.Ticket>
        ))}
      </Styled.Tickets>
    </Styled.Container>
  );
};
