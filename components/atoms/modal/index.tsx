import cn from 'classnames'
// import { useEffect, useRef } from 'react'
import Button from '../button'

interface ModalProps {
  isOpen: boolean
  leftText: string
  rightText: string
  leftHandler: React.MouseEventHandler<HTMLButtonElement>
  confirmHandler: React.MouseEventHandler<HTMLButtonElement>
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  leftText,
  rightText,
  leftHandler,
  confirmHandler,
}) => {
  // const modalElem = useRef()
  // const clickOutsideHandler = (e) => {
  //   if (isOpen && !modalElem.current.contains(e.target)) isOpen = false
  // }

  // useEffect(() => {
  //   window.addEventListener('click', clickOutsideHandler)
  //   return () => {
  //     window.removeEventListener('click', clickOutsideHandler)
  //   }
  // }, [])

  return (
    isOpen && (
      <div
        className={cn(
          'absolute inset-0 z-10',
          'bg-black bg-opacity-50',
          'flex justify-center items-center'
        )}
      >
        <div
          className={cn('bg-white', 'p-5', 'rounded-lg shadow-md')}
          // ref={modalElem}
        >
          <div className={cn(`flex justify-center`)}>{children}</div>
          <div className={cn('flex justify-end mt-6')}>
            <Button
              type="button"
              size="small"
              fontSize="big"
              fontColor="primary"
              backgroundColor="white"
              onClickHandler={leftHandler}
            >
              {leftText}
            </Button>
            <span className={cn('ml-5')} />
            <Button
              type="button"
              size="small"
              fontSize="big"
              fontColor="white"
              backgroundColor="primary"
              onClickHandler={confirmHandler}
            >
              {rightText}
            </Button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
