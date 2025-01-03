import '@emotion/styled';

declare module '@emotion/styled' {
  export interface DefaultTheme {
    color: {
      blue: string;
      greyScale1: string;
      greyScale2: string;
      greyScale3: string;
      greyScale4: string;
      greyScale5: string;
    };
    fontSize: {
      title: string;
      subtitle: string;
      body: string;
      placeholder: string;
      button: string;
      caption: string;
    };
    fontWeight: {
      title: string;
      subtitle: string;
      body: string;
      placeholder: string;
      button: string;
      caption: string;
    };
    lineHeight: {
      title: string;
      subtitle: string;
      body: string;
      placeholder: string;
      button: string;
      caption: string;
    };
  }
}
