import cn from 'classnames'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

interface CopyInputProps {
  text: string
  placeholder?: string
}

const CopyInput: React.FC<CopyInputProps> = ({ text, placeholder }) => {
  return (
    <div className={cn('w-360 relative z-0 flex flex-row')}>
      <Input
        type="url"
        id="copy-input"
        name="copy-input"
        spacing="md-5 pr-10 relative overflow-hidden"
        size="copy"
        placeholder={placeholder}
        onChange={null}
        value={text}
      />
      <Span
        spacing="absolute w-16 h-7 mt-1.5 -right-7 flex flex-row"
        fontSize="normal"
        fontColor="highlight"
        fontWeight="bold"
      >
        <ClipboardCopyIcon
          onClick={() => navigator.clipboard.writeText(text)}
          className={cn('cursor-pointer')}
        />
      </Span>
    </div>
  )
}

export default CopyInput
