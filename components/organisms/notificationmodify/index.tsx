/* eslint-disable no-console */
import cn from 'classnames'
import Box from '../../atoms/box'
import Button from '../../atoms/button'
import Divider from '../../atoms/divider'
import Span from '../../atoms/span'
import NotificationSetting from '../../molecules/notificationsetting'
import Notification from '../../../types/notification'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useReducer } from 'react'
import { getApiClient } from '../../../utils/getApiClient'

type Action =
  | { type: 'get'; payload: Notification }
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
    case 'get': {
      return { ...action.payload }
    }
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

const NotificationModify: React.FC = () => {
  const router = useRouter()
  const id = +router.query.id
  const [notification, dispatch] = useReducer(reducer, null as Notification)

  useEffect(() => {
    if (!id) return
    getApiClient()
      .get(`/notifications/${id}`)
      .then(({ data }) => {
        console.log(data)
        dispatch({ type: 'get', payload: data })
      })
  }, [id])

  const submitCallback = useCallback(() => {
    console.log(notification)
    getApiClient()
      .put(`/notifications/${id}`, notification)
      .then(({ data }) => {
        if (data && data.name === notification.name) {
          router.push('/notifications')
        }
        console.log(data)
      })
      .catch(console.error)
  }, [notification])

  return (
    notification && (
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
              ?????? ??????
            </Span>
            <Span spacing="" fontSize="big" fontColor="gray-800">
              ???????????? ?????? ??????????????? ???????????? ????????? ???????????????.
            </Span>
          </div>
          <br />
          {/* Divider */}
          <Divider />
          {/* Content */}
          <NotificationSetting
            notification={notification}
            dispatch={dispatch}
          />
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
              ????????????
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
              ????????????
            </Button>
          </div>
        </div>
      </Box>
    )
  )
}

export default NotificationModify
