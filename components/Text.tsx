import { PolymorphicComponentProp } from 'types/PolymorphicComponentProp'

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type TextProps = {
  color?: Rainbow | 'black'
}

export const Text = <C extends React.ElementType = 'span'>({
  as,
  color,
  children,
  ...restProps
}: PolymorphicComponentProp<C, TextProps>) => {
  const Component = as || 'span'
  const style = color ? { style: { color } } : {}

  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  )
}
