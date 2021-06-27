import cn from 'classnames'

interface BoxProps {
  width: string
  height: string
  spacing: string
  backgroundColor: string
  hasShadow: boolean
  onClick?: () => void
}

const Box: React.FC<BoxProps> = ({
  width,
  height,
  spacing,
  backgroundColor,
  hasShadow,
  children,
  onClick,
}) => {
  return (
    <div
      className={cn(
        `w-${width} h-${height} ${spacing}`,
        'border border-gray-300 border-opacity-40 rounded',
        `bg-${backgroundColor}`,
        hasShadow ? 'shadow-primary' : ''
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Box
