import Td from '../../atoms/td'
import Th from '../../atoms/th'

interface TableProps {
  title: Array<string>
  content: Array<{ name: string; type: string; key: string }>
}

const Table: React.FC<TableProps> = ({ title, content }) => {
  return (
    <table>
      <thead>
        <tr>
          {title.map((option, idx) => (
            <Th
              key={idx}
              option={option}
              fontSize="normal"
              fontColor="text-gray-900"
            >
              {option}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {content.map((option, idx) => (
          <tr key={idx}>
            <Td key={idx} options={option} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
