import { SearchIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Webhook from '../../../types/webhook'
import { getApiClient } from '../../../utils/getApiClient'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import WebhookItem from '../../molecules/webhookitem'

interface WebhookListProps {
  spacing: string
}

const WebhookList: React.FC<WebhookListProps> = ({ spacing }) => {
  const router = useRouter()
  const [webhooks, setWebhooks] = useState<Webhook[]>([])
  const [search, setSearch] = useState<string>('')

  const searchHandler = (e) => {
    setSearch(e.currentTarget.value)
  }

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
            value={search}
            onChange={searchHandler}
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
        {webhooks
          // .filter((webhook) => {
          //   webhook.name.toLowerCase().includes(search.toLowerCase())
          // })
          .reverse()
          .map(({ id, type, name, createdAt }) => {
            return (
              <WebhookItem
                key={id}
                id={id}
                type={type}
                name={name}
                createdAt={createdAt}
              />
            )
          })}
      </div>
    </div>
  )
}

export default WebhookList
