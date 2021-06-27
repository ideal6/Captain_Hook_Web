import cn from 'classnames'

interface TdProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  record: any
  onClickHandler: React.MouseEventHandler<HTMLElement>
}

const Td: React.FC<TdProps> = ({ record, onClickHandler }) => {
  return (
    <>
      {Object.entries(record).map(([_, value], idx) => (
        <td
          key={idx}
          className={cn('px-6 py-4 whitespace-nowrap', 'text-gray-800 text-sm')}
        >
          {value}
        </td>
      ))}
      <td className={cn('pr-5 py-3 whitespace-nowrap', 'text-sm font-medium')}>
        <span
          onClick={onClickHandler}
          className={cn('cursor-pointer text-highlight hover:text-indigo-900')}
        >
          수정
        </span>
      </td>
    </>
  )
}

export default Td
