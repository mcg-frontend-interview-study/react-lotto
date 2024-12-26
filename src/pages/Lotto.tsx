import * as Styled from './Lotto.style';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

export const Lotto = () => {
  return (
    <Styled.Page>
      <Header />
      <Styled.Main>
        <Styled.Title>🎱 내 번호 당첨 확인 🎱</Styled.Title>
      </Styled.Main>
      <Footer />
    </Styled.Page>
  );
};
