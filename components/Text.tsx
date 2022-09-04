import React from 'react'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple'

type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>

type TextProps<C extends React.ElementType> = {
  as?: C
  color?: Rainbow | 'black'
}

export const Text = <C extends React.ElementType = 'span'>({ as, color, children, ...restProps }: Props<C>) => {
  const Component = as || 'span'
  const style = color ? { style: { color } } : {}

  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  )
}
