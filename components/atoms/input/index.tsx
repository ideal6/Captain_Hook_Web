import cn from 'classnames'
import { ChangeEventHandler } from 'react'

interface InputProps {
  type: 'email' | 'password' | 'search' | 'text' | 'url'
  id: string
  name: string
  spacing: string
  size: 'auth' | 'small' | 'normal' | 'big' | 'copy'
  placeholder?: string | undefined
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

const inputSize = {
  auth: 'w-360 h-50',
  copy: 'w-96 h-10',
  small: 'w-60 h-10',
  normal: 'w-360 h-10',
  big: 'w-480 h-10',
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  spacing,
  size,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        `rounded pl-3 pr-2 ${spacing}`,
        'text-base text-gray-800 placeholder-gray-500',
        'border border-gray-300',
        'focus:outline-none focus:ring-1 focus:border-primary focus:ring-primary',
        inputSize[size]
      )}
    />
  )
}

export default Input
