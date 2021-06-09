import cn from 'classnames'

interface TdProps {
  options: { name: string; type: string; key?: string }
}

const Td: React.FC<TdProps> = ({ options }) => {
  return printTd(options)
}

function printTd(values: { name: string; type: string; key?: string }) {
  const count = Object.keys(values).length

  if (count === 2) {
    return (
      <>
        <td className={cn('px-6 py-4 whitespace-nowrap text-gray-900 text-sm')}>
          {values.name}
        </td>
        <td className={cn('px-6 py-4 whitespace-nowrap text-gray-900 text-sm')}>
          {values.type}
        </td>

        <td className={cn('px-1 py-3 whitespace-nowrap text-sm font-medium')}>
          <a href="#" className={cn('text-indigo-600 hover:text-indigo-900')}>
            수정
          </a>
        </td>
      </>
    )
  } else if (count === 3) {
    return (
      <>
        <td className={cn('px-6 py-4 whitespace-nowrap text-gray-900 text-sm')}>
          {values.name}
        </td>
        <td className={cn('px-6 py-4 whitespace-nowrap text-gray-900 text-sm')}>
          {values.type}
        </td>
        <td className={cn('px-6 py-4 whitespace-nowrap text-gray-500 text-sm')}>
          {values.key}
        </td>
        <td className={cn('px-1 py-3 whitespace-nowrap text-sm')}>
          <a href="#" className={cn('text-indigo-600 hover:text-indigo-900')}>
            수정
          </a>
        </td>
      </>
    )
  }
}

export default Td
