/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames'
import { useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

interface ListBoxProps {
  options: { label: string; value: string }[]
  size: 'small' | 'normal' | 'big' | 'auto'
  initialValue?: { label: string; value: string }
  onChange?: ({ label, value }: { label: string; value: string }) => void
}

const boxSize = {
  small: 'w-20 h-10',
  normal: 'w-40 h-10',
  big: 'w-360 h-10',
  auto: 'w-max',
}

const ListBox2: React.FC<ListBoxProps> = ({
  options,
  size,
  initialValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<{ label: string; value: string }>(
    initialValue
  )

  const handleClickButton = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleClickElement = useCallback(
    (e) => {
      const index = e.currentTarget.dataset.idx
      setSelected(options[index])
      setIsOpen(false)
      onChange(options[index])
    },
    [options]
  )

  return (
    <div className={cn('mt-1', 'relative')}>
      <button
        type="button"
        className={cn(
          'flex flex-row justify-between',
          'relative  bg-white',
          'border border-gray-300 rounded px-3 py-2',
          'focus:outline-none focus:ring-1 focus:border-highlight focus:ring-highlight'
        )}
        onClick={handleClickButton}
      >
        <span className={cn('text-gray-800 px-1')}>
          <span>{selected.label}</span>
        </span>
        <span className={cn('pt-0.5', 'text-gray-500')}>
          {isOpen ? (
            <ChevronUpIcon className={cn('w-5 h-5')}></ChevronUpIcon>
          ) : (
            <ChevronDownIcon className={cn('w-5 h-5')}></ChevronDownIcon>
          )}
        </span>
      </button>
      <ul
        className={cn(
          'overflow-auto absolute',
          'mt-1 w-max bg-white shadow-md',
          'border border-gray-100 rounded',
          {
            hidden: !isOpen,
          }
        )}
      >
        {options.map((option, idx) => {
          return (
            <li key={idx} onClick={handleClickElement} data-idx={idx}>
              <div
                className={cn(
                  'pl-3 pr-3 py-2 text-gray-800',
                  'hover:bg-highlight hover:text-gray-lighter cursor-pointer'
                )}
              >
                <span>{option.label}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListBox2
