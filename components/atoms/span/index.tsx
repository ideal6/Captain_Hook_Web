import cn from 'classnames'

interface SpanProps {
  spacing: string
  fontSize: 'small' | 'normal' | 'big' | 'title' | 'subTitle'
  fontColor: string
  fontWeight?: 'bold'
}

const textSize = {
  small: 'text-xs',
  normal: 'text-sm',
  big: 'text-base',
  title: 'text-5xl',
  subTitle: 'text-2xl',
}

const Span: React.FC<SpanProps> = ({
  children,
  spacing,
  fontSize,
  fontColor,
  fontWeight,
}) => {
  return (
    <span
      className={cn(
        textSize[fontSize],
        `text-${fontColor} ${spacing}`,
        fontWeight ? `font-${fontWeight}` : ''
      )}
    >
      {children}
    </span>
  )
}

export default Span
