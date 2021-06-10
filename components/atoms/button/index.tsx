import cn from 'classnames'

interface ButtonProps {
  type: 'button' | 'submit'
  text: string
  size: 'small' | 'normal' | 'big'
  fontSize: 'small' | 'normal' | 'big'
  fontColor: string
  backgroundColor: string
}

const btnSize = {
  small: 'w-20 h-10',
  normal: 'w-36 h-9',
  big: 'w-360 h-10',
}

const textSize = {
  small: 'text-xs',
  normal: 'text-sm',
  big: 'text-base',
}

// TODO: button rounded, shadow, hover-pointer, hover-color
const Button: React.FC<ButtonProps> = ({
  type = 'button',
  text,
  size,
  fontSize,
  fontColor,
  backgroundColor,
}) => {
  return (
    <button
      type={type}
      className={cn(
        btnSize[size],
        textSize[fontSize],
        `text-${fontColor}`,
        `bg-${backgroundColor}`
      )}
    >
      {text}
    </button>
  )
}

export default Button
