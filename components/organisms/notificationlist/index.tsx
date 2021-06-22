import { SearchIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import Button from '../../atoms/button'
import Input from '../../atoms/input'
import NotificationItem from '../../molecules/notificationitem'

interface NotificationListProps {
  spacing: string
}

const NotificationList: React.FC<NotificationListProps> = ({ spacing }) => {
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
            placeholder="알림 이름으로 검색"
          />
        </div>
        {/* 2. 알림 추가 button */}
        <Button
          type="button"
          size="normal"
          text="알림 추가"
          fontSize="big"
          fontColor="primary"
          backgroundColor="white"
          // eslint-disable-next-line no-console
          onClickHandler={(e) => console.log(e)}
        />
        {/* 3. 알림 list */}
      </div>
      <div>
        {items.map(({ name, recentDate, webhookId, notificationId }, idx) => (
          <NotificationItem
            key={idx}
            name={name}
            recentDate={recentDate}
            webhookId={webhookId}
            notificationId={notificationId}
          />
        ))}
      </div>
    </div>
  )
}

const items = [
  {
    name: 'Notification 1',
    recentDate: new Date(),
    webhookId: ['google_calendar'],
    notificationId: ['gmail', 'telegram', 'discord'],
  },
  {
    name: 'Notification 2',
    recentDate: new Date(),
    webhookId: ['github', 'google_drive'],
    notificationId: ['slack', 'discord'],
  },
]

export default NotificationList
