import cn from 'classnames'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

const CopyInput: React.FC = () => {
  return (
    <div className={cn('w-400 flex flex-row')}>
      <Input
        type="text"
        id="copy-input"
        name="copy-input"
        spacing="md-5 relative"
        size="copy"
        placeholder="url"
      />
      <Span
        spacing="absolute w-16 h-7 mt-1.5 right-30 flex flex-row"
        fontSize="normal"
        fontColor="highlight"
        fontWeight="bold"
      >
        <ClipboardCopyIcon />
        복사
      </Span>
    </div>
  )
}

export default CopyInput
