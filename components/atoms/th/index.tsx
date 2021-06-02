import cn from 'classnames'

interface ThProps {
  fontSize: 'small' | 'normal' | 'big'
  fontColor: string
  option: string
}

const textSize = {
  small: 'text-xs text-gray-600 ',
  normal: 'text-sm text-gray-800',
  big: 'text-base text-gray-800 ',
}

const Th: React.FC<ThProps> = ({ fontSize, option, fontColor }) => {
  return (
    <th
      className={cn(
        'flex flex-row justify-between',
        `text-${fontColor}`,
        textSize[fontSize]
      )}
    >
      {option}
    </th>
  )
}

export default Th
