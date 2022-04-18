import { DefaultTheme } from 'styled-components'
import { css } from 'styled-components'

export const theme: DefaultTheme = {
  color: {
    black: '#000000',
    gray: '#999999',
    error: '#ff5858',
    correct: '#4498F2',
    yellow: '#ffdc3c',
    hoverBg: '#eeeeee',
  },
  font: {
    headline: css`
      font-size: 40px;
      font-weight: 700;
      line-height: 56px;
    `,
    subTitle_1: css`
      font-size: 28px;
      line-height: 36px;
      font-weight: 700;
    `,
    subTitle_2: css`
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
    `,
    subTitle_3: css`
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    `,
    subTitle_4: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;
    `,
    body_1: css`
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    `,
    body_2: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    `,
    mainButton: css`
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
    `,
    button: css`
      font-size: 14px;
      line-height: 20px;
      font-weight: 700;
    `,
    caption: css`
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
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