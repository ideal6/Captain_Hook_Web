/* eslint-disable no-console */
import cn from 'classnames'
import Box from '../../../components/atoms/box'
import Button from '../../atoms/button'
import Divider from '../../atoms/divider'
import Span from '../../atoms/span'
import NotificationSetting from '../../molecules/notificationsetting'

const NotificationAdd: React.FC = () => {
  return (
    <Box
      width=""
      height=""
      spacing="flex flex-wrap content-between flex-1 m-5 px-9 py-7"
      backgroundColor="white"
      hasShadow={true}
    >
      <div className={cn('w-full')}>
        {/* Header */}
        <div className={cn('flex flex-col')}>
          <Span
            spacing="mb-1"
            fontSize="title"
            fontColor="gray-800"
            fontWeight="bold"
          >
            알림 추가
          </Span>
          <Span spacing="" fontSize="big" fontColor="gray-800">
            존재하는 웹훅 서비스들을 사용하여 알림을 등록합니다.
          </Span>
        </div>
        <br />
        {/* Divider */}
        <Divider />
        {/* Content */}
        <NotificationSetting />
      </div>

      <div className={cn('w-full')}>
        {/* Divider */}
        <Divider />
        <br />
        {/* Footer */}
        <div className={cn('flex justify-end self-end')}>
          <Button
            type="button"
            size="small"
            fontSize="normal"
            fontColor="primary"
            backgroundColor="white"
            onClickHandler={(e) => console.log(e)}
          >
            취소하기
          </Button>
          <span className={cn('ml-5')} />
          <Button
            type="button"
            size="small"
            fontSize="normal"
            fontColor="white"
            backgroundColor="primary"
            onClickHandler={(e) => console.log(e)}
          >
            저장하기
          </Button>
        </div>
      </div>
    </Box>
  )
}

export default NotificationAdd
