import { SearchIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getApiClient } from '../../../utils/getApiClient'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import WebhookItem from '../../molecules/webhookitem'

interface WebhookListProps {
  spacing: string
}

interface WebhookItem {
  id: number
  type: string | 'github' | 'google_calendar' | 'custom'
  name: string
  recentDate: Date
}

const WebhookList: React.FC<WebhookListProps> = ({ spacing }) => {
  const router = useRouter()
  const [webhooks, setWebhooks] = useState<WebhookItem[]>([])
  useEffect(() => {
    const apiClient = getApiClient()
    apiClient.get('/webhooks').then(({ data }) => {
      setWebhooks(data)
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
            placeholder="웹훅 이름으로 검색"
          />
        </div>
        {/* 2. 웹훅 추가 button */}
        <Button
          type="button"
          size="normal"
          fontSize="big"
          fontColor="primary"
          backgroundColor="white"
          // eslint-disable-next-line no-console
          onClickHandler={() => {
            router.push('/webhooks/add')
          }}
        >
          웹훅 추가
        </Button>
      </div>
      {/* 3. 웹훅 list */}
      <div>
        {webhooks.map(({ id, type, name, recentDate = new Date() }) => (
          <WebhookItem
            key={id}
            type={type}
            name={name}
            recentDate={recentDate}
          />
        ))}
      </div>
    </div>
  )
}

export default WebhookList
