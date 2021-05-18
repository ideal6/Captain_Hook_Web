import cn from 'classnames'

//hi

interface InputProps {
  type: 'email' | 'password' | 'radio' | 'checkbox' | 'search' | 'text' | 'url'
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
        'rounded',
        'pl-3 pr-2',
        'text-base text-gray-300',
        'border border-gray-300',
        'focus:outline-none focus:border-opacity-0 focus:ring-2 focus:ring-primary',
        inputSize[size]
      )}
    />
  )
}

export default Input
