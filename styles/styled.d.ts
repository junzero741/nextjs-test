import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      black: '#000000'
      gray: '#999999'
      lightGray: '#666'
      purple: '#9c6fca'
      error: '#ff5858'
      blue: '#4498F2'
      yellow: '#ffdc3c'
      hoverBg: '#eeeeee'
    }
    font: {
      headline: FlattenSimpleInterpolation
      subTitle_1: FlattenSimpleInterpolation
      subTitle_2: FlattenSimpleInterpolation
      subTitle_3: FlattenSimpleInterpolation
    }
    boxShadow: {
      card: '4px 0px 10px rgba(0, 0, 0, 0.05)'
      normal: '0 3px 8px 0 rgb(0 0 0 / 10%)'
      purple: '0 3px 8px 0 #d6c9ff'
      blue: '0 3px 8px 0 #b3e2e6'
    }
  }
}
