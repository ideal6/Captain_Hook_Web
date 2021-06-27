/* eslint-disable no-console */
import cn from 'classnames'
import Box from '../../../components/atoms/box'
import Button from '../../atoms/button'
import Divider from '../../atoms/divider'
import Span from '../../atoms/span'
import NotificationSetting from '../../molecules/notificationsetting'
import Notification from '../../../types/notification'
import { useRouter } from 'next/router'
import { useCallback, useReducer } from 'react'
import { getApiClient } from '../../../utils/getApiClient'

type Action =
  | { type: 'name'; payload: string }
  | { type: 'condition'; payload: string }
  | {
      type: 'methods'
      payload: {
        name: string
        type: string
        key: string
      }[]
    }

function reducer(state: Notification, action: Action): Notification {
  switch (action.type) {
    case 'name': {
      return { ...state, name: action.payload }
    }
    case 'condition': {
      return { ...state, condition: action.payload }
    }
    case 'methods': {
      return { ...state, methods: action.payload }
    }
  }
}

const NotificationAdd: React.FC = () => {
  const router = useRouter()
  const [notification, dispatch] = useReducer(reducer, {
    name: '',
    condition: '',
    methods: [
      { name: '문자 A', type: 'SMS', key: '010-1234-5678' },
      { name: '이메일 A', type: 'email', key: 'company@example.com' },
      { name: '이메일 B', type: 'email', key: 'private@example.com' },
    ],
  } as Notification)

  const submitCallback = useCallback(() => {
    getApiClient()
      .post('/notifications', notification)
      .then(({ data }) => {
        if (data && data.name === notification.name) {
          router.push('/notifications')
        }
        console.log(data)
      })
      .catch(console.error)
  }, [notification])

  console.log(notification)

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
        <NotificationSetting notification={notification} dispatch={dispatch} />
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
            onClickHandler={() => {
              router.push('/notifications')
            }}
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
            onClickHandler={submitCallback}
          >
            저장하기
          </Button>
        </div>
      </div>
    </Box>
  )
}

export default NotificationAdd
