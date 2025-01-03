import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Content from '../components/Content/Content';
import { LottoProvider } from '../contexts/LottoContext';

function App() {
  return (
    <>
      <Header />
      <LottoProvider>
        <Content />
      </LottoProvider>
      <Footer />
    </>
  );
}

export default App;
