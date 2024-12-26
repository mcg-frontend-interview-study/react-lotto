import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      grayScale1: string;
      grayScale2: string;
      grayScale3: string;
      grayScale4: string;
      grayScale5: string;
      grayScale5opacity12: string;
    };
    typography: {
      title: string;
      subtitle: string;
      body: string;
      placeholder: string;
      caption: string;
    };
  }
}
