import cn from 'classnames'

interface BoxProps {
  width: string
  height: string
  spacing: string
  backgroundColor: string
  hasShadow: boolean
  childComponent?: React.ReactNode
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  spacing,
  backgroundColor,
  hasShadow,
  childComponent,
}) => {
  return (
    <div
      className={cn(
        `w-${width} h-${height} ${spacing}`,
        `bg-${backgroundColor}`,
        hasShadow ? 'shadow-primary' : ''
      )}
    >
      {childComponent}
    </div>
  )
}

export default Box
