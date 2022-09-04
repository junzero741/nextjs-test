import React from 'react'
import { PolymorphicComponentPropWithRef, PolymorphicRef } from 'types/PolymorphicComponentProp'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, { color?: Rainbow | 'black' }>

type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement | null

// eslint-disable-next-line react/display-name
export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>({ as, color, children, ...restProps }: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const Component = as || 'span'
    const style = color ? { style: { color } } : {}

    return (
      <Component {...restProps} {...style} ref={ref}>
        {children}
      </Component>
    )
  }
)
