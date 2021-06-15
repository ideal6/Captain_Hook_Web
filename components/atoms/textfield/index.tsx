import cn from 'classnames'

interface TextFieldProps {
  type: 'email' | 'password' | 'text'
  name: string
  placeholder: string
  color: string
}

const TextField: React.FC<TextFieldProps> = ({
  type,
  name,
  placeholder,
  color,
}) => {
  return (
    <div className={cn('md:flex md:items-center')}>
      <div className={cn('mb-4')}>
        <label className={cn('block text-gray-700 text-sm font-bold mb-2')}>
          {name}
        </label>
        <input
          className={cn(
            'appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none',
            `focus:border-${color}`
          )}
          id={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default TextField
