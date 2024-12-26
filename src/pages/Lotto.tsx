import * as Styled from './Lotto.style';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { InputOrderAmount } from '../components/InputOrderAmount/InputOrderAmount';
import { useBuyLotto } from '../hooks/useBuyLotto';

export const Lotto = () => {
  const { amountInput, setAmountInput, handleLottoCounts, lottoCounts } = useBuyLotto();

  return (
    <Styled.Page>
      <Header />
      <Styled.Main>
        <Styled.Title>🎱 내 번호 당첨 확인 🎱</Styled.Title>
        <InputOrderAmount
          amountInput={amountInput}
          setAmountInput={setAmountInput}
          handleLottoCounts={handleLottoCounts}
        />
        {lottoCounts}
      </Styled.Main>
      <Footer />
    </Styled.Page>
  );
};
