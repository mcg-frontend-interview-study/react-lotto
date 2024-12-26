import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle';
import { theme } from './style/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <p>Hello World!</p>
      </ThemeProvider>
    </>
  );
}

export default App;
