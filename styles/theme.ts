import { DefaultTheme } from 'styled-components'
import { css } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    black: '#000000',
    gray: '#999999',
    lightGray: '#666',
    purple: '#9c6fca',
    error: '#ff5858',
    correct: '#4498F2',
    yellow: '#ffdc3c',
    hoverBg: '#eeeeee',
  },
  font: {
    headline: css`
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: 800;
      letter-spacing:  -0.05rem;
      margin: 1rem 0;
    `,
    subTitle_1: css`
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing:  -0.05rem;
    `,
    subTitle_2: css`
      font-size: 1.5rem;
      line-height: 1.4;
      margin: 1rem 0;
      font-weight: 700;
    `,
    subTitle_3: css`
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 700;
    `,
  },
  boxShadow: {
    card :'4px 0px 10px rgba(0, 0, 0, 0.05)',
    normal: '0 3px 8px 0 rgb(0 0 0 / 10%)',
    purple: '0 3px 8px 0 #d6c9ff',
    blue: '0 3px 8px 0 #b3e2e6',
  },
}

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
}