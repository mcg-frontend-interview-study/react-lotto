import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import { theme } from './style/theme';
import { Lotto } from './pages/Lotto';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Lotto />
      </ThemeProvider>
    </>
  );
}

export default App;
