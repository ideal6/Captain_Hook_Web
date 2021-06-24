/* eslint-disable no-console */
import cn from 'classnames'
import Box from '../../../components/atoms/box'
import Button from '../../atoms/button'
import Divider from '../../atoms/divider'
import Span from '../../atoms/span'
import WebhookSetting from '../../molecules/webhooksetting'

const WebhookAdd: React.FC = () => {
  return (
    <Box
      width=""
      height="full"
      spacing="flex flex-col flex-grow flex-shrink m-5 mb-24 px-9 py-7"
      backgroundColor="white"
      hasShadow={true}
    >
      {/* Header */}
      <div className={cn('flex flex-col')}>
        <Span
          spacing="mb-1"
          fontSize="title"
          fontColor="gray-800"
          fontWeight="bold"
        >
          웹훅 추가
        </Span>
        <Span spacing="" fontSize="big" fontColor="gray-800">
          존재하는 웹훅 서비스를 설정하고 URL을 등록합니다.
        </Span>
      </div>
      <br />
      {/* Divider */}
      <Divider />
      {/* Content */}
      <WebhookSetting />
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
    </Box>
  )
}

export default WebhookAdd
