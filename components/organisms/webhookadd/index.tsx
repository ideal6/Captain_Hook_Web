/* eslint-disable no-console */
import cn from 'classnames'
import { useRouter } from 'next/dist/client/router'
import { useCallback, useReducer } from 'react'
import Box from '../../../components/atoms/box'
import Webhook from '../../../types/webhook'
import { getApiClient } from '../../../utils/getApiClient'
import Button from '../../atoms/button'
import Divider from '../../atoms/divider'
import Span from '../../atoms/span'
import WebhookSetting from '../../molecules/webhooksetting'

type Action =
  | { type: 'name'; payload: string }
  | { type: 'type'; payload: string }
  | {
      type: 'fields'
      payload: {
        name: string
        description: string
        field: string
      }[]
    }

function reducer(state: Webhook, action: Action): Webhook {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload }
    case 'type':
      return { ...state, type: action.payload }
    case 'fields':
      return { ...state, fields: action.payload }
  }
}

const WebhookAdd: React.FC = () => {
  const router = useRouter()
  const [webhook, dispatch] = useReducer(reducer, {
    name: '',
    type: 'github',
    fields: [
      { name: 'Name', description: '사용자 이름', field: '.user.name' },
      {
        name: 'Email',
        description: '사용자 이메일 주소',
        field: '.user.email',
      },
      {
        name: 'Repository Names',
        description: '레포지토리 이름들',
        field: '.repository[any].name',
      },
    ],
  } as Webhook)
  const submitCallback = useCallback(() => {
    const apiClient = getApiClient()
    apiClient
      .post('/webhooks', webhook)
      .then(({ data }) => {
        if (data && data.name === webhook.name) {
          router.push('/webhooks')
        } else {
          //TODO: 에러 핸들링? -> 있을 수 없음
        }
        console.log(data)
      })
      .catch((error) => {
        console.log(error, error && error.data)
      })
  }, [webhook])

  console.log(webhook)
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
        <WebhookSetting webhook={webhook} dispatch={dispatch} />
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
              router.push('/webhooks')
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

export default WebhookAdd
