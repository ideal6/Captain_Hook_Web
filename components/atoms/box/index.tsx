import cn from 'classnames'

interface BoxProps {
  width: string
  height: string
  spacing: string
  backgroundColor: string
  hasShadow: boolean
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  spacing,
  backgroundColor,
  hasShadow,
  children,
}) => {
  return (
    <div
      className={cn(
        `w-${width} h-${height} ${spacing}`,
        'border border-gray-300 border-opacity-40 rounded',
        `bg-${backgroundColor}`,
        hasShadow ? 'shadow-primary' : ''
      )}
    >
      {children}
    </div>
  )
}

export default Box
