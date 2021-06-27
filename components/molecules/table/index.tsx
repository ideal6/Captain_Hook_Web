import Td from '../../atoms/td'
import Th from '../../atoms/th'
import cn from 'classnames'
import { PlusCircleIcon } from '@heroicons/react/outline'

interface TableProps {
  title: Array<string>
  content:
    | Array<{ name: string; type: string; key: string }>
    | Array<{ name: string; desc: string; field: string }>
  addDataField: React.MouseEventHandler<SVGElement>
  modifyDataField: React.MouseEventHandler<HTMLSpanElement>
}

const Table: React.FC<TableProps> = ({
  title,
  content,
  addDataField,
  modifyDataField,
}) => {
  return (
    <div
      className={cn('flex flex-col flex-shrink-0', '-my-2 sm:-mx-6 lg:-mx-8')}
    >
      <div className={cn('py-2 align-middle inline-block sm:px-6 lg:px-8')}>
        <div
          className={cn(
            'border border-gray-300 border-opacity-40 rounded',
            'shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'
          )}
        >
          <table className={cn('table-auto w-full divide-y divide-gray-200')}>
            <thead className={cn('bg-gray-50')}>
              <tr>
                {title.map((option, idx) => (
                  <Th key={idx} option={option} fontColor="text-gray-600" />
                ))}
                <th
                  className={cn(
                    'px-1 py-3 text-right text-xs text-gray-500 tracking-wider'
                  )}
                >
                  <PlusCircleIcon
                    onClick={addDataField}
                    className={cn('w-6 h-6 text-highlight cursor-pointer')}
                  />
                </th>
              </tr>
            </thead>

            <tbody className={cn('bg-white divide-y divide-gray-200')}>
              {content.map((option, idx) => (
                <tr key={idx}>
                  <Td
                    key={idx}
                    record={option}
                    onClickHandler={modifyDataField}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
