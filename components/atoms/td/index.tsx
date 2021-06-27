import cn from 'classnames'

interface TdProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  record: any
  onClickHandler: React.MouseEventHandler<HTMLElement>
  filter?: string[]
}

const Td: React.FC<TdProps> = ({ record, onClickHandler, filter = [] }) => {
  return (
    <>
      {Object.entries(record)
        .filter((r) => (filter.length === 0 ? true : filter.includes(r[0])))
        .map(([_, value], idx) => (
          <td
            key={idx}
            className={cn(
              'px-6 py-4 whitespace-nowrap',
              'text-gray-800 text-sm'
            )}
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
