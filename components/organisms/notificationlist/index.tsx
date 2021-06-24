import { SearchIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getApiClient } from '../../../utils/getApiClient'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import NotificationItem from '../../molecules/notificationitem'

interface NotificationListProps {
  spacing: string
}

interface NotificationItem {
  id: number
  name: string
  recentDate: Date
  dependentWebhooks: string[]
  methods: string[]
}

const NotificationList: React.FC<NotificationListProps> = ({ spacing }) => {
  const router = useRouter()
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  useEffect(() => {
    const apiClient = getApiClient()
    apiClient.get('/notifications').then(({ data }) => {
      setNotifications(data)
    })
  }, [])

  return (
    <div className={cn(`${spacing}`)}>
      <div className={cn('flex justify-between')}>
        {/* 1. 검색 input */}
        <div>
          <SearchIcon className={cn('absolute w-7 h-7 z-10 pl-3 pt-3')} />
          <Input
            type="search"
            id="webhook-search"
            name="webhook-search"
            spacing="pl-9 mb-5 relative"
            size="small"
            placeholder="알림 이름으로 검색"
          />
        </div>
        {/* 2. 알림 추가 button */}
        <Button
          type="button"
          size="normal"
          fontSize="big"
          fontColor="primary"
          backgroundColor="white"
          // eslint-disable-next-line no-console
          onClickHandler={() => {
            router.push('/notifications/add')
          }}
        >
          알림 추가
        </Button>
        {/* 3. 알림 list */}
      </div>
      <div>
        {notifications.map(
          ({ id, name, recentDate, dependentWebhooks, methods }) => (
            <NotificationItem
              key={id}
              name={name}
              recentDate={recentDate}
              dependentWebhooks={dependentWebhooks}
              methods={methods}
            />
          )
        )}
      </div>
    </div>
  )
}

export default NotificationList
