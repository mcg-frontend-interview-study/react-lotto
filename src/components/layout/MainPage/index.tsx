import * as S from './styles';

import { Header, Footer } from '../index';
import { LottoGame } from '../../lotto/index';

const MainPage = () => {
  return (
    <S.MainPage>
      <Header />
      <LottoGame />
      <Footer />
    </S.MainPage>
  );
};

export default MainPage;
