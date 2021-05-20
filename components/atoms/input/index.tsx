import cn from 'classnames'

interface InputProps {
  type: 'email' | 'password' | 'search' | 'text' | 'url'
  id: string
  name: string
  size: 'auth' | 'small' | 'normal' | 'big'
  placeholder?: string | undefined
}

const inputSize = {
  auth: 'w-360 h-50',
  small: 'w-60 h-10',
  normal: 'w-360 h-10',
  big: 'w-480 h-10',
}

const Input: React.FC<InputProps> = ({ type, id, name, size, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={cn(
        'rounded pl-3 pr-2',
        'text-base text-gray-800 placeholder-gray-500',
        'border border-gray-300',
        'focus:outline-none focus:ring-1 focus:border-highlight focus:ring-highlight',
        inputSize[size]
      )}
    />
  )
}

export default Input
