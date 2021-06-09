import Td from '../../atoms/td'
import Th from '../../atoms/th'
import cn from 'classnames'

interface TableProps {
  title: Array<string>
  content:
    | Array<{ name: string; type: string; key: string }>
    | Array<{ name: string; field: string }>
}

const Table: React.FC<TableProps> = ({ title, content }) => {
  return (
    <div className={cn('flex flex-col flex-1')}>
      <div className={cn('-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8')}>
        <div
          className={cn(
            'py-2 align-middle inline-block w-6/12 sm:px-6 lg:px-8'
          )}
        >
          <div
            className={cn(
              'border border-gray-300 border-opacity-40 rounded',
              'shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'
            )}
          >
            <table className={cn('w-full divide-y divide-gray-200')}>
              <thead className={cn('bg-gray-50')}>
                <tr>
                  {title.map((option, idx) => (
                    <Th key={idx} option={option} fontColor="text-gray-600">
                      {option}
                    </Th>
                  ))}
                  <th
                    className={cn(
                      'px-1 py-3 text-right text-xs text-gray-500 tracking-wider'
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={cn('h-6 w-6 text-indigo-600')}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody className={cn('bg-white divide-y divide-gray-200')}>
                {content.map((option, idx) => (
                  <tr key={idx}>
                    <Td key={idx} options={option} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
