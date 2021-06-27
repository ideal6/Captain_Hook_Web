import { BellIcon } from '@heroicons/react/outline'
import cn from 'classnames'
import Box from '../../atoms/box'
import Span from '../../atoms/span'

interface NotificationItemProps {
  name: string
  createdAt: string
  dependentWebhooks: string[]
  methods: {
    name: string
    type: string
    key: string
  }[]
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  name,
  createdAt,
  dependentWebhooks,
  methods,
}) => {
  const time = new Date(createdAt)

  return (
    <Box
      width=""
      height="20"
      spacing="mb-4 flex flex-row flex-shrink flex-grow"
      backgroundColor="white"
      hasShadow={true}
    >
      <div className={cn('flex flex-row mr-auto pl-1')}>
        <BellIcon className={cn('w-7 h-7 my-auto mx-5')} />
        <div className={cn('flex flex-col mt-3.5 mb-4 justify-evenly')}>
          <Span
            spacing=""
            fontSize="normal"
            fontColor="gray-800"
            fontWeight="bold"
          >
            {name}
          </Span>
          <Span spacing="" fontSize="normal" fontColor="gray-default">
            {`생성 날짜: ${time.toLocaleString()}`}
          </Span>
        </div>
      </div>
      <div
        className={cn('flex flex-row h-8 my-auto divide-x-2 divide-gray-200 ')}
      >
        <div className={cn('flex flex-row')}>
          {dependentWebhooks.map((id, idx) => (
            <img
              key={idx}
              src={`/${id}.png`}
              className={cn('w-auto h-8 my-auto mr-3')}
            />
          ))}
        </div>
        <div className={cn('flex flex-row mr-6')}>
          {methods.map(({ type }, idx) => (
            <img
              key={idx}
              src={`/${type}.png`}
              className={cn('w-auto h-8 my-auto ml-3')}
            />
          ))}
        </div>
      </div>
    </Box>
  )
}

export default NotificationItem
