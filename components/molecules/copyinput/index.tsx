import cn from 'classnames'
import { ClipboardCopyIcon } from '@heroicons/react/outline'
import Input from '../../atoms/input'
import Span from '../../atoms/span'

const CopyInput: React.FC = () => {
  const copyToClipboard = (e) => {
    // eslint-disable-next-line no-console
    console.log(e)
  }

  return (
    <div className={cn('w-360 relative flex flex-row')}>
      <Input
        type="text"
        id="copy-input"
        name="copy-input"
        spacing="md-5 pr-10 relative overflow-hidden"
        size="copy"
        placeholder="url"
      />
      <Span
        spacing="absolute w-16 h-7 mt-1.5 -right-7 flex flex-row"
        fontSize="normal"
        fontColor="highlight"
        fontWeight="bold"
      >
        <ClipboardCopyIcon
          onClick={copyToClipboard}
          className={cn('cursor-pointer')}
        />
      </Span>
    </div>
  )
}

export default CopyInput
