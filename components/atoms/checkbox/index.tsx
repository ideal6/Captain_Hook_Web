import cn from 'classnames'

interface CheckboxProps {
  content: string
  color: string
}

const Checkbox: React.FC<CheckboxProps> = ({ content, color }) => {
  return (
    <div className={cn('pl-14 w-1/2 bg-white')}>
      <input
        type="checkbox"
        className={cn(`checked:bg-${color}`, 'checked: border-transparent')}
      />
      <label className={cn('ml-2')}>{content}</label>
    </div>
  )
}

export default Checkbox
