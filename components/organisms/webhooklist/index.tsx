import { SearchIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import WebhookItem from '../../molecules/webhookitem'

interface WebhookListProps {
  spacing: string
}

const WebhookList: React.FC<WebhookListProps> = ({ spacing }) => {
  return (
    <div className={cn(`${spacing}`)}>
      <div className={cn('flex justify-between w-1632')}>
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
          text="웹훅 추가"
          fontSize="big"
          fontColor="primary"
          backgroundColor="white"
          // eslint-disable-next-line no-console
          onClickHandler={(e) => console.log(e)}
        />
      </div>
      {/* 3. 웹훅 list */}
      <div>
        {items.map(({ id, name, recentDate }, idx) => (
          <WebhookItem key={idx} id={id} name={name} recentDate={recentDate} />
        ))}
      </div>
    </div>
  )
}

const items = [
  { id: 'github', name: '깃허브', recentDate: new Date() },
  { id: 'google_calendar', name: '구글 캘린더', recentDate: new Date() },
]

export default WebhookList
