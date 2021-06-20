import cn from 'classnames'
import Input from '../../atoms/input'

interface CopyInputProps {
  color: string
}

const CopyInput: React.FC<CopyInputProps> = () => {
  return (
    <div className={cn('flex flex-row m-6 items-center')}>
      <div>
        <Input
          type="text"
          id="copy-input"
          name="copy-input"
          spacing="md-5 relative"
          size="copy"
          placeholder="url"
        />
      </div>
      <div className={cn('ml-1')}>
        <button
          type="button"
          className={cn(
            'bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-indigo-600 shadow'
          )}
          onClick={() => {
            navigator.clipboard.writeText('Copy this text to clipboard')
          }}
        >
          <span className={cn('sr-only')}>Copy</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-6 w-6')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CopyInput
