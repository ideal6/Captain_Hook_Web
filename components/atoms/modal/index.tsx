import cn from 'classnames'
import Button from '../button'

interface ModalProps {
  isOpen: boolean
  text: string
  closeHandler: React.MouseEventHandler<HTMLButtonElement>
  confirmHandler: React.MouseEventHandler<HTMLButtonElement>
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  text,
  closeHandler,
  confirmHandler,
}) => {
  return (
    isOpen && (
      <div
        className={cn(
          'absolute inset-0',
          'bg-black bg-opacity-50',
          'flex justify-center items-center'
        )}
      >
        <div className={cn('bg-white', 'p-5', 'rounded-lg shadow-md')}>
          <div className={cn(`flex justify-center`)}>{children}</div>
          <div className={cn('flex justify-end mt-6')}>
            <Button
              type="button"
              size="small"
              fontSize="big"
              fontColor="primary"
              backgroundColor="white"
              onClickHandler={closeHandler}
            >
              취소
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
              {text}
            </Button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
