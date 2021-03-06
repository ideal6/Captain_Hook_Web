import cn from 'classnames'

interface ButtonProps {
  type: 'button' | 'submit'
  size: 'small' | 'normal' | 'big'
  fontSize: 'small' | 'normal' | 'big'
  fontColor: string
  backgroundColor: string
  onClickHandler: React.MouseEventHandler<HTMLElement>
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

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  size,
  fontSize,
  fontColor,
  backgroundColor,
  onClickHandler,
}) => {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className={cn(
        btnSize[size],
        textSize[fontSize],
        `text-${fontColor} font-bold`,
        `bg-${backgroundColor}`,
        'border border-gray-300 border-opacity-40 rounded-lg',
        'focus:outline-none shadow-primary',
        backgroundColor == 'white'
          ? 'hover:bg-gray-100 hover:bg-opacity-50'
          : `hover:bg-opacity-90`
      )}
    >
      {children}
    </button>
  )
}

export default Button
