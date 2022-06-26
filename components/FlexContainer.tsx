import React from 'react'
import styled from 'styled-components'


interface IFlexContainer {
    children : React.ReactNode
    direction? : "column" | "row"
    jc? : "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenely" | "stretch" | "inherit" | "initial"
    ai? : "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenely" | "stretch" | "inherit" | "initial" 
    style? : any
}


const FlexContainer = ({children, jc, ai, direction} : IFlexContainer ) => {
  return (
    <FlexContainerLayout direction={direction} jc={jc} ai={ai}>{children}</FlexContainerLayout>
  )
}

export default FlexContainer

const FlexContainerLayout = styled.div<IFlexContainer>`
    display : flex;
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: ${({jc}) => jc || "center"};
    align-items: ${({ai}) => ai || "center"};
`
