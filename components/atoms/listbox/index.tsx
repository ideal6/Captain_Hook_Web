import cn from 'classnames'
import { useCallback, useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

interface ListBoxProps {
  label: string
  placeholder: string
  options: Array<string>
  size: 'small' | 'normal' | 'big'
  labelSize: 'small' | 'normal' | 'big'
}

const boxSize = {
  small: 'w-20 h-10',
  normal: 'w-40 h-10',
  big: 'w-360 h-10',
}

const textSize = {
  small: 'text-xs text-gray-600 font-bold',
  normal: 'text-sm text-gray-800',
  big: 'text-base text-gray-800 font-bold',
}

const ListBox: React.FC<ListBoxProps> = ({
  label,
  placeholder,
  options,
  size,
  labelSize,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(placeholder)

  const handleClickButton = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleClickElement = useCallback((e) => {
    const index = e.currentTarget.dataset.idx
    setSelected(options[index])
    setIsOpen(false)
  }, [])

  return (
    <>
      <label htmlFor="" className={cn(textSize[labelSize])}>
        {label}
      </label>
      <div className={cn('mt-1', 'relative', boxSize[size])}>
        <button
          type="button"
          className={cn(
            'flex flex-row justify-between',
            'relative w-full bg-white',
            'border border-gray-300 rounded pl-3 pr-3 py-2',
            'focus:outline-none focus:ring-1 focus:border-highlight focus:ring-highlight'
          )}
          onClick={handleClickButton}
        >
          <span
            className={cn(
              selected === placeholder ? 'text-gray-500' : 'text-gray-800'
            )}
          >
            <span>{selected}</span>
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
            'overflow-auto',
            'mt-1 w-full bg-white shadow-md',
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
                  <span>{option}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default ListBox
