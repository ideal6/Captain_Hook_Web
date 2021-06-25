/* eslint-disable no-console */
import cn from 'classnames'
import Button from '../button'

const Modal: React.FC = ({ children }) => {
  return (
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
            onClickHandler={(e) => console.log(e)}
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
            onClickHandler={(e) => console.log(e)}
          >
            저장
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
