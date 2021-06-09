import cn from 'classnames'

interface ThProps {
  fontColor: string
  option: string
}

const Th: React.FC<ThProps> = ({ option, fontColor }) => {
  return (
    <th
      scope="col"
      className={cn(
        `text-${fontColor}`,
        'px-6 py-3 text-left text-xs font-normal text-gray-500 tracking-wider'
      )}
    >
      {option}
    </th>
  )
}

export default Th
