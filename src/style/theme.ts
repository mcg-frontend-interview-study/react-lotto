import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    primary: '#4E5BA6',
    grayScale1: '#FFFFFF',
    grayScale2: '#FCFCFD',
    grayScale3: '#B4B4B4',
    grayScale4: '#8B8B8B',
    grayScale5: '#000000',
    grayScale5opacity12: '#0000001F',
  },
  typography: {
    title: `
      font-family: Roboto;
      font-size: 24px;
      font-weight: 800;
      line-height: 36px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      `,
    subtitle: `
      font-family: Roboto;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.15000000596046448px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      `,

    body: `
      font-family: Roboto;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      `,

    placeholder: `
      font-family: Roboto;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      `,

    caption: `
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
    `,
  },
};
