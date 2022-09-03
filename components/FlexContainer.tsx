import React from 'react'
import styled, { CSSProperties } from 'styled-components'
import { FlexAlignment } from 'types/FlexAlignment'

interface IFlexContainer {
  children: React.ReactNode
  direction?: 'column' | 'row'
  justifyContent?: FlexAlignment
  alignItems?: FlexAlignment
  style?: CSSProperties
}

const FlexContainer = ({ children, justifyContent, alignItems, direction }: IFlexContainer) => {
  return (
    <FlexContainerLayout direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </FlexContainerLayout>
  )
}

export default FlexContainer

const FlexContainerLayout = styled.div<IFlexContainer>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`
