interface TdProps {
  options:
    | { name: string; type: string; key: string }
    | { name: string; field: string }
}

const Td: React.FC<TdProps> = ({ options }) => {
  return printTd(options)
}

function printTd(
  values:
    | { name: string; type: string; key: string }
    | { name: string; field: string }
) {
  for (const value in values) {
    return <td> {value} </td>
  }
}

export default Td
